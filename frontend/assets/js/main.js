function addWattsKgMessage(wattsKg) {
  document.getElementById("message").innerHTML =
    `<div class="notification is-primary is-light mb-4">
     <span class="is-size-3">
      <strong>${wattsKg}</strong>
     </span>
   </div>`
}

function addError(message) {
  document.getElementById("message").innerHTML =
    `<div class="notification is-danger is-light mb-4">
   <button onclick="removeMessage()" class="delete"></button>${message}
   </div>`;
}

function removeMessage() {
  document.getElementById("message").innerHTML = '';
}

function poundsToKg(pounds) {
  const kgs = pounds / 2.2046;
  return kgs.toFixed(2);
}

window.onload = function () {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const form = document.getElementById('watts-kg-form');
  const wattsInput = document.getElementById('watts-input');
  const weightInput = document.getElementById('weight-input');
  const unitsSelect = document.getElementById('units-select');
  wattsInput.value = urlParams.get('watts');
  weightInput.value = urlParams.get('weight');
  unitsSelect.value = urlParams.get('units');
  const formValid = form.checkValidity();
  if (formValid) {
    let kilograms = weightInput.value;
    if (unitsSelect.value === 'lbs') {
      kilograms = poundsToKg(weightInput.value);
    }
    const wattsPerKg = wattsInput.value / kilograms;
    addWattsKgMessage(`${wattsPerKg.toFixed(2)} watts/kg`);
  }
}