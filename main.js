// INFO: Huge function, could maybe refactor?
function toggle_dark() {
  document
    .querySelectorAll('.header')
    .forEach(
      (el) => el.classList.toggle('dark')
    )

  document
    .querySelectorAll('.article')
    .forEach(
      (el) => el.classList.toggle('dark')
    )

  document.querySelectorAll('p')
    .forEach(
      (el) => el.classList.toggle('dark')
    )

  document.querySelectorAll('h1')
    .forEach(
      (el) => el.classList.toggle('dark')
    )

  document.querySelectorAll('h2')
    .forEach(
      (el) => el.classList.toggle('dark')
    )

  document.querySelectorAll('h3')
    .forEach(
      (el) => el.classList.toggle('dark')
    )

  document.querySelectorAll('h4')
    .forEach(
      (el) => el.classList.toggle('dark')
    )

  document.querySelector('body')
    .classList.toggle('dark')

  document.getElementById('toggler').classList.toggle('dark')
}

const btn = document.getElementById('toggler')

btn.addEventListener(
  'click',
  () => toggle_dark()
)
