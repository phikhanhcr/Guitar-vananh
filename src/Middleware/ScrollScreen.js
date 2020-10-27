export function scrollScreen() {
  var header;
  window.addEventListener('scroll', () => {
    header = document.getElementById('header')
    if (window.scrollY > 800) {
      header.classList.add('active')
    } else {
      header.classList.remove('active')
    }
  })
}