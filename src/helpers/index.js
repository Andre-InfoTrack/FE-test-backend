// Extracts all results links in an HTML string
export const getLinkList = html => {
  // List of link startes that are not search result links
  const notSearchLinks = [
    'http://www.google.com',
    '/search',
    '/url?q=https://accounts.google.com/',
    '/?',
    '/advanced_search',
    'http://maps.google.com',
    '//www.google.com',
  ];

  // Find everything with 'href="...."'
  const allLinks = html.match(/href="(.*?)"/g);

  // Remove anything that's in the noSearchLinks list
  const searchLinks = allLinks.filter(item => {
    let isLink = true;
    notSearchLinks.forEach(link => {
      if (item.indexOf(`href="${link}`) === 0) {
        isLink = false;
      }
    });
    return isLink;
  });

  // Remove duplicate youtube links
  const finalLinks = [];

  searchLinks.forEach((link, index) => {
    if (link.includes('youtube')) {
      // If it's a youtube link, check if it matches the previous link
      // If so don't include it
      if (searchLinks[index - 1].substring(1, 30) !== link.substring(1, 30)) {
        finalLinks.push(link);
      };
    } else {
      finalLinks.push(link);
    };
  });

  return finalLinks;
};

// Finds a search term in an array and returns the non-index position of each occurrence
export const findInList = (list, searchTerm) => {
  const results = [];

  list.forEach((item, index) => {
    if (item.includes(searchTerm)) {
      results.push(index + 1);
    }
  });

  return results;
};
