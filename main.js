let rows = []
const options = [
  {
    id: 1,
    name: 'Recina'
  },
  {
    id: 2,
    name: 'PVC'
  },
]

const container = document.querySelector('#root')

function addRow() {
  rows.push({
    materiaPrima: '',
    cantidad: 0
  })
  drawRows()
}

function updateRowCantidad(element, index) {
  rows[index].cantidad = element.value
}

function updateRowMateriaPrima(element, index) {
  const exist = rows.find(row => row.materiaPrima == element.value)
  if (exist) {
    element.value = ''
    return
  }
  rows[index].materiaPrima = element.value
}

function generateOptions(id) {
  let optionsHtml = `
    <option disabled ${!id && 'selected'} value="">
      Seleccione una opcion
    </option>
  `

  for (const option of options) {
    optionsHtml += `<option ${id == option.id && 'selected'} value="${option.id}">${option.name}</option>`
  }
  return optionsHtml
}

function drawRows() {
  let html = ''
  rows.forEach((row, index) => {
    html += `
      <div>
        <select onchange="updateRowMateriaPrima(this, ${index})" value="${row.materiaPrima}">
          ${generateOptions(row.materiaPrima)}
        </select>
        <input min="12" max="14" step="0.001" oninput="updateRowCantidad(this, ${index})" type="number" value="${row.cantidad}">
      </div>
    `
  })
  container.innerHTML = html
}

function send() {
  document.querySelector('#nameCompuesto').value
}



