// This is function for internation tel number input.
const SelectionBox = document.getElementById('selectionBox');
const selectionDropdown = document.getElementById('selectionDropdown');
const selectedOption = document.getElementById('selected-option');

SelectionBox.addEventListener('click', ()=> {
    selectionDropdown.classList.toggle('show-selection-dropdown-box');
})

// To get the selected value and close dropdown.
const selectionItems = document.querySelectorAll('.selection-items');

selectionItems.forEach(selectOption => {
    selectOption.addEventListener('click', () => {
        const selectedValue = selectOption.getAttribute('data-value');

        selectedOption.textContent = selectedValue;
        selectionDropdown.classList.remove('show-selection-dropdown-box');
    });
});



// This is the function to select options.
const selectionContainer = document.getElementById('selectionContainer');
const options = document.querySelectorAll('.options');

selectionContainer.addEventListener('click', () => {
    const selectionList = document.getElementById('selectionList');
    selectionList.classList.toggle('show-selections');
    const selectedLi = document.getElementById('selectedLi');

    options.forEach((option) => {
        option.addEventListener('click', () => {
            options.forEach((otherOption) => {
                otherOption.classList.remove('selected');
            });

            option.classList.add('selected');
            buttonSubmit();
            selectedLi.textContent = option.textContent; 
            selectionList.classList.remove('show-selections');
        });
    });
});





// This is for the submit button function.
const emailInputs = document.querySelectorAll('input[type="email"]');
const numberInputs = document.querySelectorAll('input[type="number"]');
const inputRadio = document.querySelectorAll('.inputRadio');
const inputText = document.querySelectorAll('.inputText');
const submitBtn = document.getElementById('submitBtn');

function buttonSubmit(){
    const isAnySelectedRadio = Array.from(inputRadio).some((radio) => radio.checked);
    const isFilled = Array.from(inputText).every((Textinput) => Textinput.value !== '');
    const isAnySelectedOption = Array.from(options).some((option) => option.classList.contains('selected'));
    const areEmailInputsValid = Array.from(emailInputs).every((emailInput) => emailInput.checkValidity());
    const areNumberInputsValid = Array.from(numberInputs).every((numberInput) => numberInput.checkValidity());

    if(isAnySelectedRadio && isFilled && isAnySelectedOption && areEmailInputsValid && areNumberInputsValid){
        submitBtn.disabled = false;
        submitBtn.classList.remove('default-submitBtn');
        submitBtn.classList.add('submitbutton');
      }
    
      else {
        submitBtn.disabled = true;
        submitBtn.classList.remove('submitbutton');
        submitBtn.classList.add('default-submitBtn');
      }
}





// These are the EventListener of inputs inside of the buttonSubmit(). 
inputRadio.forEach((radio) => {
    radio.addEventListener('change', buttonSubmit)
});

inputText.forEach((Textinput) => {
    Textinput.addEventListener('input', buttonSubmit)
})

options.forEach((option) => {
    option.addEventListener('change', buttonSubmit)
});





// If the window is refresh then the forms will set to clear all inputs.
window.addEventListener('load', ()=>{
  document.getElementById('form').reset();
  submitBtn.classList.remove('submitbutton');
  submitBtn.classList.add('default-submitBtn');
})




// Get all radio boxes
const radioBoxes = document.querySelectorAll('.radio-box');

radioBoxes.forEach(radioBox => {
  radioBox.addEventListener('click', function() {
    const radioButton = this.querySelector('input[type="radio"]');
    if (radioButton) {
      radioButton.click();
    }
  });
});





