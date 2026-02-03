#!/bin/bash

# Script de déploiement rapide pour Honda Pacific Coast
# À utiliser dans cPanel Terminal ou SSH

set -e  # Stop en cas d'erreur

echo "🚀 Démarrage du déploiement..."

# Couleurs pour les logs
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Chemins
REPO_PATH="/home/hondapacificcoas/repositories/pacific-coast/"
DEPLOY_PATH="/home/hondapacificcoas/public_html/"

echo -e "${YELLOW}📁 Navigation vers le repo...${NC}"
cd "$REPO_PATH"

echo -e "${YELLOW}📥 Git Pull...${NC}"
git pull origin main

echo -e "${YELLOW}📦 Installation des dépendances...${NC}"
/opt/cpanel/ea-nodejs20/bin/npm install

echo -e "${YELLOW}🔨 Build...${NC}"
/opt/cpanel/ea-nodejs20/bin/npm run build

echo -e "${YELLOW}🚀 Déploiement (sans toucher /magazine)...${NC}"

# Déploiement sécurisé : copie fichier par fichier en EXCLUANT /magazine
# On utilise rsync avec --exclude pour protéger WordPress
rsync -av --delete \
  --exclude='magazine/' \
  --exclude='wp-admin/' \
  --exclude='wp-content/' \
  --exclude='wp-includes/' \
  --exclude='wp-*.php' \
  --exclude='xmlrpc.php' \
  --exclude='index.php' \
  dist/ "$DEPLOY_PATH"

echo -e "${GREEN}✅ Déploiement terminé avec succès !${NC}"
echo "🌐 Vérifie sur : https://honda-pacific-coast.fr/"
