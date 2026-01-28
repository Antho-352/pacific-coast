// src/lib/wordpress.js

const API_URL = 'https://honda-pacific-coast.fr/magazine/wp-json/wp/v2';

export async function getRecentPosts(perPage = 10, excludeIds = []) {
  try {
    // Construit l'URL avec les IDs à exclure si nécessaire
    let url = `${API_URL}/posts?_embed&per_page=${perPage}`;
    if (excludeIds.length > 0) {
      url += `&exclude=${excludeIds.join(',')}`;
    }
    const res = await fetch(url);
    if (!res.ok) throw new Error('Erreur fetch posts');
    return await res.json();
  } catch (e) {
    console.error(e);
    return [];
  }
}

// Récupère l'ID de la catégorie par son slug
export async function getCategoryIdBySlug(slug) {
  try {
    const res = await fetch(`${API_URL}/categories?slug=${slug}`);
    if (!res.ok) throw new Error('Erreur fetch catégorie');
    const categories = await res.json();
    return categories.length > 0 ? categories[0].id : null;
  } catch (e) {
    console.error(e);
    return null;
  }
}

// Récupère les articles de la catégorie "a-la-une"
export async function getALaUnePosts(perPage = 3) {
  try {
    // Récupère l'ID de la catégorie "a-la-une"
    const categoryId = await getCategoryIdBySlug('a-la-une');
    
    if (!categoryId) {
      console.log('Catégorie a-la-une non trouvée');
      return [];
    }
    
    // Récupère les articles de cette catégorie
    const res = await fetch(`${API_URL}/posts?_embed&categories=${categoryId}&per_page=${perPage}`);
    if (!res.ok) throw new Error('Erreur fetch posts à la une');
    return await res.json();
  } catch (e) {
    console.error(e);
    return [];
  }
}

export async function getFeaturedPosts(perPage = 3) {
  try {
    // Essaie de récupérer les articles mis en avant (sticky), sinon les récents
    const res = await fetch(`${API_URL}/posts?_embed&sticky=true&per_page=${perPage}`);
    const posts = await res.json();
    
    // Si pas d'articles mis en avant, on retourne les récents
    if (!posts || posts.length === 0) {
      return getRecentPosts(perPage);
    }
    return posts;
  } catch (e) {
    console.error(e);
    return [];
  }
}

// --- C'EST CETTE FONCTION QUI MANQUAIT ---
export function getFeaturedImageUrl(post) {
  if (
    post._embedded && 
    post._embedded['wp:featuredmedia'] && 
    post._embedded['wp:featuredmedia'][0]
  ) {
    return post._embedded['wp:featuredmedia'][0].source_url;
  }
  // Image par défaut si l'article n'en a pas
  return '/images/default-bike.jpg'; 
}

export function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}

export function extractExcerpt(htmlContent) {
  if (!htmlContent) return '';
  // Enlève les balises HTML et coupe à 150 caractères
  const text = htmlContent.replace(/<[^>]+>/g, '');
  return text.substring(0, 150) + (text.length > 150 ? '...' : '');
}
