document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('nav ul li a');
  const sections = document.querySelectorAll('section');
  const backToTopButton = document.getElementById('back-to-top');

  const removeActiveClasses = () => {
    links.forEach(link => link.classList.remove('active'));
  };

  const addActiveClass = () => {
    let index = sections.length;

    while (--index && window.scrollY + 50 < sections[index].offsetTop) { }

    removeActiveClasses();
    if (index >= 0) {
      links[index].classList.add('active');
    }
  };

  window.addEventListener('scroll', () => {
    addActiveClass();

    if (window.pageYOffset > 300) {
      backToTopButton.style.display = 'flex';
      backToTopButton.classList.add('fade-in');
    } else {
      backToTopButton.style.display = 'none';
      backToTopButton.classList.remove('fade-in');
    }
  });

  backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  addActiveClass();
});
