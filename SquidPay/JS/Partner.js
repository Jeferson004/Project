// This is for the submit button function.
const textareas = document.querySelectorAll('textarea');
const emailInputs = document.querySelectorAll('input[type="email"]');
const numberInputs = document.querySelectorAll('input[type="number"]');
const inputRadio = document.querySelectorAll('.inputRadio');
const inputText = document.querySelectorAll('.inputText');
const submitBtn = document.getElementById('submitBtn');
function buttonSubmit(){
    const textareaIsFilled = Array.from(textareas).every((textarea) => textarea.value !== '');
    const isFilled = Array.from(inputText).every((Textinput) => Textinput.value !== '');
    const areEmailInputsValid = Array.from(emailInputs).every((emailInput) => emailInput.checkValidity());
    const areNumberInputsValid = Array.from(numberInputs).every((numberInput) => numberInput.checkValidity());

    if(isFilled && areEmailInputsValid && areNumberInputsValid && textareaIsFilled){
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
inputText.forEach((Textinput) => {
    Textinput.addEventListener('input', buttonSubmit)
})






// If the window is refresh then the forms will set to clear all inputs.
window.addEventListener('load', ()=>{
  document.getElementById('form').reset();
  submitBtn.classList.remove('submitbutton');
  submitBtn.classList.add('default-submitBtn');
})

