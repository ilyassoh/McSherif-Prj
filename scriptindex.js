function me() {
    alert('Current scroll from the top: ' + window.pageYOffset);
  }
  var scroll = document.querySelector('.product8');
      scroll.classList.toggle("active1", window.scrollY > 1160)