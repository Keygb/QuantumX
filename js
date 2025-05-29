document.addEventListener('DOMContentLoaded', function () {
  const selectors = [
    'img[src*="/A_PH/"]',
    'div[class*="ad"]',
    'div[id*="ad"]',
  ];
  selectors.forEach(sel => {
    document.querySelectorAll(sel).forEach(el => {
      let parent = el.parentElement;
      el.remove();
      if (parent && parent.children.length === 0) {
        parent.style.margin = '0';
        parent.style.padding = '0';
        parent.style.height = '0';
        parent.style.lineHeight = '0';
      }
    });
  });
});
