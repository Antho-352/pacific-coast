# Changelog - PC800.fr

Toutes les modifications notables de ce projet seront documentées ici.

## [1.0.0] - 2026-01-28

### 🎨 Phase 1 : Identité Visuelle

#### Ajouté
- **Logo SVG** (`/public/images/logo.svg`) avec :
  - Typographie bold "PC800" style années 90
  - Vague stylisée en arrière-plan
  - Dégradé sunset-orange vers turquoise
  - Version monochrome blanche (`logo-white.svg`) pour header dark
  
- **Favicons** complets :
  - `favicon.svg` - Version vectorielle principale
  - `apple-touch-icon.png` - Pour iOS (placeholder)
  - `site.webmanifest` - Configuration PWA
  
- **Design System CSS** (`/src/styles/design-system.css`) :
  - Variables CSS complètes avec nouvelle palette "Pacific Coast"
  - Couleurs primaires : Ocean Deep (#003d5c), Ocean Light (#0074a3)
  - Couleurs accent : Sunset Orange (#ff6b35), Turquoise (#00b4d8)
  - Couleurs neutres : Sand Beige (#f4f1e8), Warm White (#fefefe), Dark Navy (#001e2b)
  - Classes utilitaires pour backgrounds, textes, boutons
  
- **Métadonnées SEO complètes** dans `Layout.astro` :
  - Open Graph tags (title, description, image, url)
  - Twitter Card tags
  - Canonical URL
  - Preconnect pour performance

#### Modifié
- **Layout.astro** : Refonte complète avec :
  - Intégration du Design System CSS
  - Toutes les balises favicon et métadonnées
  - Support des props title, description, image
  
- **Navigation.astro** : Nouveau design avec :
  - Logo SVG à la place du texte "PC"
  - Background Ocean Deep avec effet glassmorphism
  - Icônes emoji devant chaque lien de navigation
  - Bouton CTA "Rejoindre" avec couleur Sunset Orange
  - Hover effects améliorés (turquoise)
  - Navigation mobile redesignée
  
- **Footer.astro** : Refonte complète avec :
  - Logo blanc intégré
  - Section réseaux sociaux avec icônes
  - Nouvelle palette Dark Navy / Ocean Deep
  - Links avec icônes
  - Disclaimer restylé

### 🔧 Technique
- Création de classes CSS utilitaires pour la nouvelle palette
- Spacer de 80px (h-20) pour compenser le header fixed
- Effets de transition et hover améliorés

---

## Prochaines phases à venir

### Phase 2 : Hero Section Immersive (2026-01-28)

#### Ajouté
- **Composant HeroSection** (`/src/components/HeroSection.astro`) :
  - Background image HD avec effet parallax (`background-attachment: fixed`)
  - Gradient overlay Ocean Deep pour meilleur contraste
  - Pattern subtil en arrière-plan
  - Badge animé "Produite de 1989 à 1998 • Communauté active en 2026"
  - 4 stats rapides (1989, 45K, 280kg, 140L)
  - Scroll indicator avec animation bounce
  - CTA buttons avec hover effects améliorés
  
- **Typographie responsive** avec `clamp()` :
  - Titre principal : `clamp(2.5rem, 8vw, 5rem)`
  - Sous-titre : `clamp(1.2rem, 3vw, 1.8rem)`
  - Adaptation automatique mobile/desktop
  
- **Animations CSS** :
  - Fade-in du badge au chargement
  - Pulse sur le point du badge
  - Bounce sur le scroll indicator
  - Transitions smooth sur tous les éléments interactifs

#### Modifié
- **index.astro** : Refonte complète avec :
  - Intégration du nouveau HeroSection
  - Sections redesignées avec nouvelle palette
  - Cards avec hover effects (shadow + translate)
  - Titres de section avec icônes emoji et ligne décorative
  - Fiche technique avec background sand-beige
  - Meilleure hiérarchie visuelle

#### Technique
- Responsive : parallax désactivé sur mobile (`background-attachment: scroll`)
- Performance : images lazy loading
- Accessibilité : contrastes vérifiés

---

### 🖼️ Phase 3 : Galerie & Contenu Visuel (2026-01-28)

#### Ajouté
- **Composant GallerySection** (`/src/components/GallerySection.astro`) :
  - Grid responsive 3 colonnes (desktop) / 2 (tablet) / 1 (mobile)
  - 9 images placeholder Unsplash (motos, routes, détails)
  - Filtres par catégorie : Toutes / Extérieur / Détails / En balade
  - Animation fade-in lors du filtrage
  - Hover effects : zoom image + overlay avec titre
  - Icône loupe au coin supérieur droit
  - CTA "Envoyer mes photos" pour la communauté

- **Lightbox modal intégrée** :
  - Ouverture au clic sur une image
  - Navigation flèches (précédent/suivant)
  - Navigation clavier (flèches, Escape)
  - Swipe sur mobile (gauche/droite)
  - Compteur "X / 9"
  - Légende avec titre et catégorie
  - Backdrop sombre avec blur
  - Bouton fermer (X)

#### Modifié
- **index.astro** : Ajout de `<GallerySection />` avant la fiche technique
- Fiche technique : background blanc avec bordure (au lieu de sand-beige)

#### Technique
- JavaScript vanilla pour filtrage et lightbox (pas de lib externe)
- Lazy loading sur toutes les images
- Responsive : touch events pour mobile
- Animations CSS fluides

---

### 🤝 Phase 4 : Histoire & Communauté (2026-01-28)

#### Ajouté
- **Composant TimelineSection** (`/src/components/TimelineSection.astro`) :
  - Timeline verticale avec faits historiques réels (1989-1998 + aujourd'hui)
  - Design alterné gauche/droite sur desktop
  - Ligne verticale avec gradient Ocean → Turquoise
  - 5 milestones avec icônes et descriptions factuelles
  - "Le saviez-vous ?" sur les origines du nom "Pacific Coast"
  
- **Composant CommunitySection** (`/src/components/CommunitySection.astro`) :
  - **Sans faux chiffres** - invitation sobre à participer
  - 3 cards : Forum technique, Documentation, Partage photos
  - Formulaire newsletter (mockup)
  - Liens réseaux sociaux (Facebook, Instagram, YouTube)
  - Design glassmorphism sur fond Ocean Deep

#### Modifié
- **index.astro** : Intégration TimelineSection après la galerie, CommunitySection en pleine largeur avant le footer

#### Éthique / Contenu
- ✅ Tous les faits historiques sont vérifiables
- ✅ Pas de faux témoignages inventés
- ✅ Pas de faux chiffres sur la communauté
- ✅ Invitation honnête à participer

---

### Prochaines améliorations potentielles
- Optimisations performance (Lighthouse)
- SEO avancé (Schema.org)
- Dark mode
- Multilingue

### Phase 3 : Galerie & Contenu Visuel
- Section galerie avec grid et lightbox
- 9-12 photos Unsplash
- Filtres par catégorie

### Phase 4 : Header & Navigation (complément)
- Animations underline
- Active states

### Phase 5 : Nouvelles Sections
- Bandeau communauté
- Timeline histoire
- Témoignages carrousel

### Phase 6 : Optimisations
- Responsive mobile complet
- Lazy loading
- Performance Lighthouse > 90
