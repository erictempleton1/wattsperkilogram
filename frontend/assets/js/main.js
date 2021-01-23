function addWattsKgMessage(wattsKg) {
  document.getElementById("message").innerHTML =
    `<div class="notification is-primary is-light mb-4">
     <span class="is-size-3">
      <strong>${wattsKg}</strong>
     </span>
   </div>`
}

function poundsToKg(pounds) {
  const kgs = pounds / 2.2046;
  return kgs.toFixed(2);
}

function clearForm() {
  document.getElementById("watts-kg-form").reset();
  document.getElementById("message").innerHTML = "";
}

window.onload = function () {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const wattsInput = document.getElementById('watts-input');
  const weightInput = document.getElementById('weight-input');
  const unitsSelect = document.getElementById('units-select');
  wattsInput.value = urlParams.get('watts');
  weightInput.value = urlParams.get('weight');
  unitsSelect.value = urlParams.get('units') || 'lbs';
  const formValid = document.getElementById('watts-kg-form').checkValidity();
  if (formValid) {
    let kilograms = weightInput.value;
    if (unitsSelect.value === 'lbs') {
      kilograms = poundsToKg(weightInput.value);
    }
    const wattsPerKg = wattsInput.value / kilograms;
    addWattsKgMessage(`${wattsPerKg.toFixed(1)} watts/kg`);
  }
}