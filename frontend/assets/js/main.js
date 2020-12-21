function calculate() {
  let wattsInput = document.getElementById('watts-input').value;
  let weightInput = document.getElementById('weight-input').value;
  const inputValid = validateInput(wattsInput, weightInput);
  if (inputValid) {
    removeMessage();
    addWattsKgMessage("3.5 watts/kg");
  }
}

function addWattsKgMessage(wattsKg) {
  document.getElementById("message").innerHTML = 
  `<div class="notification is-primary is-light mb-4">
    <button onclick="removeMessage()" class="delete"></button>
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

function validateInput(watts, weight) {
  let inputValid = true;
  if (!watts && !weight) {
    addError('Please add watts and weight');
    inputValid = false;
  }
  if (!watts) {
    addError('Please add watts');
    inputValid = false;
  }
  if (!weight) {
    addError('Please add weight');
    inputValid = false;
  }
  return inputValid;
}