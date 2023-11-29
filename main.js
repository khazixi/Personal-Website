// INFO: Huge function, could maybe refactor?
function toggle_dark() {
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

  document.querySelector('nav').classList.toggle('dark')

  document.getElementById('toggler').classList.toggle('dark')
}

const btn = document.getElementById('toggler')

function toggleDarkURL() {
  const url = new URL(window.location)
  const isDark = url.searchParams.get("dark")
  if (isDark === null) url.searchParams.append("dark", "true")
  else if (isDark === "true") url.searchParams.set("dark", "false")
  else url.searchParams.set("dark", "true")
  window.history.pushState({}, "", url)
}

function darkStorage() {
  const isDark = window.localStorage.getItem("dark")
  if (isDark === "true") {
    window.localStorage.setItem("dark", "false")
  }
  else {
    window.localStorage.setItem("dark", "true")
  }
}

btn.addEventListener(
  'click',
  () => {
    toggleDarkURL()
    darkStorage()
    toggle_dark()
  }
)

window.addEventListener(
  'popstate',
  (e) => {
    toggle_dark()
  }
)
