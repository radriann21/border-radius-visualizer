const box = document.getElementById('box')
const inputs = document.querySelectorAll('input')

const objectMap = {
  topl: 'borderTopLeftRadius',
  topr: 'borderTopRightRadius',
  bottoml: 'borderBottomLeftRadius',
  bottomr: 'borderBottomRightRadius'
}

inputs.forEach(input => {
  input.addEventListener('input', (evt) => {
    const property = objectMap[input.getAttribute('name')]
    if (property) {
      box.style[property] = `${evt.target.value}px`
    }
  })
})