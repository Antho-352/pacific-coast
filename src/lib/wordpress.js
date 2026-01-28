const API_URL = "https://api.honda-pacific-coast.fr/wp-json/wp/v2";

export async function getFeaturedPosts(count = 3) {
  try {
    const res = await fetch(`${API_URL}/posts?_embed&per_page=${count}&categories_slug=a-la-une`);
    if (!res.ok) throw new Error('Failed to fetch');
    return await res.json();
  } catch (e) { return []; }
}

export async function getRecentPosts(count = 21) {
  try {
    const res = await fetch(`${API_URL}/posts?_embed&per_page=${count}`);
    if (!res.ok) throw new Error('Failed to fetch');
    return await res.json();
  } catch (e) { return []; }
}

export async function getPostBySlug(slug) {
  try {
    const res = await fetch(`${API_URL}/posts?_embed&slug=${slug}`);
    if (!res.ok) throw new Error('Failed to fetch');
    const data = await res.json();
    return data[0];
  } catch (e) { return null; }
}
