// Automatically update copyright year
document.getElementById('year').textContent = new Date().getFullYear();

// Simple mobile menu toggle
const menuBtn = document.querySelector('.menu');
const links = document.querySelector('.links');

if (menuBtn && links) {
  menuBtn.addEventListener('click', () => {
    const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', !isExpanded);
    links.style.display = isExpanded ? 'none' : 'flex';
    if (!isExpanded) {
      links.style.flexDirection = 'column';
      links.style.position = 'absolute';
      links.style.top = '70px';
      links.style.left = '0';
      links.style.right = '0';
      links.style.background = '#ffffff';
      links.style.padding = '20px';
      links.style.borderBottom = '1px solid #e2e8f0';
    }
  });
}
