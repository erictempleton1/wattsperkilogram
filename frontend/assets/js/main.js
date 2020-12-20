function calculate() {
  let wattsInput = document.getElementById('watts-input').value;
  let weightInput = document.getElementById('weight-input').value;
  const inputValid = validateInput(wattsInput, weightInput);
  if (inputValid) {
    removeError();
    // TODO - do some w/kg calc
  }
}

function addError(message) {
  document.getElementById("message").innerHTML =
  `<div class="notification is-danger is-light mb-4">
   <button onclick="removeError()" class="delete"></button>${message}
   </div>`;
}

function removeError() {
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