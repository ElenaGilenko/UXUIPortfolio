document.querySelectorAll('.back-to-top').forEach(button => {

  button.addEventListener('click', () => {

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

  });

});