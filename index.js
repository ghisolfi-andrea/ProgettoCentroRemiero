
document.addEventListener('click', (e) => {
    const dropdowns = document.querySelectorAll('nav ul ul');
    dropdowns.forEach(dropdown => {
      if (!dropdown.contains(e.target)) {
        dropdown.style.display = 'none';
      }
    });
  });