# 🚀 Guide de Déploiement

## Option 1 : Déploiement Automatique via GitHub Actions (RECOMMANDÉ)

### Configuration (à faire une seule fois)

1. **Va sur GitHub** → Settings → Secrets and variables → Actions

2. **Ajoute ces 3 secrets** :
   - `CPANEL_HOST` : ton serveur SSH (ex: `honda-pacific-coast.fr` ou l'IP)
   - `CPANEL_USER` : `hondapacificcoas` (ton nom d'utilisateur cPanel)
   - `CPANEL_PASSWORD` : ton mot de passe cPanel (ou une clé SSH si tu préfères)

3. **Active SSH sur cPanel** (si pas déjà fait) :
   - cPanel → Security → SSH Access → Manage SSH Keys
   - Ou utilise le mot de passe directement

### Utilisation

Après cette configuration, chaque `git push` sur `main` déploiera **automatiquement** ton site ! 🎉

Tu peux aussi lancer manuellement depuis l'onglet **Actions** sur GitHub.

---

## Option 2 : Script de déploiement rapide (cPanel Terminal)

Si tu préfères garder le contrôle manuel :

1. **Connecte-toi au Terminal cPanel** :
   - cPanel → Advanced → Terminal

2. **Exécute** :
   ```bash
   cd /home/hondapacificcoas/repositories/pacific-coast/
   bash deploy.sh
   ```

Ou manuellement :
```bash
cd /home/hondapacificcoas/repositories/pacific-coast/
git pull origin main
/opt/cpanel/ea-nodejs20/bin/npm install
/opt/cpanel/ea-nodejs20/bin/npm run build
cp -R dist/* /home/hondapacificcoas/public_html/
```

---

## Option 3 : Git Version Control de cPanel (si tu veux vraiment l'utiliser)

### Pourquoi le bouton "Deploy HEAD Commit" est grisé ?

Le bouton est grisé quand :
1. Il n'y a pas de nouveau commit à déployer
2. Le fichier `.cpanel.yml` n'est pas présent ou mal configuré
3. Le dépôt n'est pas configuré en mode "Push to Deploy"

### Pour le réactiver :

1. **Vérifie que ton repo est bien lié** :
   - cPanel → Files → Git Version Control
   - Clique sur "Manage" à côté de ton repo
   - Vérifie que "Push to Deploy" est activé

2. **Si le bouton reste grisé** :
   ```bash
   # En SSH/Terminal cPanel, force le déploiement :
   cd /home/hondapacificcoas/repositories/pacific-coast/
   git fetch origin
   git reset --hard origin/main
   ```
   Puis retourne dans Git Version Control, le bouton devrait être actif.

---

## 🔍 Debug

Si le déploiement échoue, vérifie les logs :
```bash
# Logs du déploiement cPanel
cat /home/hondapacificcoas/deploy.log

# Vérifie que le build fonctionne
cd /home/hondapacificcoas/repositories/pacific-coast/
/opt/cpanel/ea-nodejs20/bin/npm run build
```

---

## ✅ Résumé recommandé

| Méthode | Quand l'utiliser ? | Facilité |
|---------|-------------------|----------|
| **GitHub Actions** | Idéal pour déploiement auto | ⭐⭐⭐⭐⭐ |
| **Script deploy.sh** | Si tu veux contrôler quand déployer | ⭐⭐⭐⭐ |
| **cPanel Git Version Control** | Évite, souvent bogué | ⭐⭐ |
