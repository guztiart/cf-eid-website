/**
 * Utility function to dynamically set the favicon for a page
 * @param {string} faviconPath - Path to the favicon image
 */
export const setFavicon = (faviconPath) => {
  // Remove any existing favicon links
  const existingFavicons = document.querySelectorAll('link[rel="icon"], link[rel="shortcut icon"]');
  existingFavicons.forEach(link => link.remove());
  
  // Create new favicon link
  const favicon = document.createElement('link');
  favicon.rel = 'icon';
  favicon.href = faviconPath;
  document.head.appendChild(favicon);
};

/**
 * Set the default Eagle Industry Indonesia favicon
 */
export const setDefaultFavicon = () => {
  setFavicon(`${process.env.PUBLIC_URL}/assets/img/ekk.png`);
};