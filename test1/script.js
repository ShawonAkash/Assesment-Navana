const button = document.querySelectorAll('.button')
const layouts = document.querySelectorAll('.card')

function selectItem(e) {
  removeActiveClasses()
  removeShow()
  console.log(this.id)
  this.classList.add('active')
  const layout = document.querySelector(`#${this.id}-content`)
  //add show class
  layout.classList.add('show')
}

function removeActiveClasses() {
  button.forEach((btn) => btn.classList.remove('active'))
}
function removeShow() {
  layouts.forEach((item) => item.classList.remove('show'))
}

button.forEach((btn) => btn.addEventListener('click', selectItem))
