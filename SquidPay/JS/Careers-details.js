function Form() {
    const fileContainers = document.getElementById('file-container');
    const inputFiles = document.getElementById('input-file');
    const submitBtn = document.getElementById('submitBtn');
    const displayFile = document.getElementById('display-file');
  
    
    // Start inputField
    function inputField(){
      function inputFilled() {
        const inputField = document.querySelectorAll('.input-field');
  
        for(const field of inputField){
          if (field.value === '') {
            return false;
          } 
        }
        return true;
      }
  
      function submitForm(){
        if(inputFilled()){
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
  
      const inputFields = document.querySelectorAll('.input-field');
      inputFields.forEach((field) => {
        field.addEventListener('input', submitForm);
      });
      submitForm();
  
      // if the page is refresh or reload, will clear all input field value.

      window.addEventListener('load', ()=>{
        document.getElementById('form').reset();
        submitBtn.classList.remove('submitbutton');
        submitBtn.classList.add('default-submitBtn');
      })
    }
    inputField()
    // End inputField
  
  
    
    function InputTypeFile(){
      // if user click input Input, then user able to upload.
      fileContainers.addEventListener('click', () => {
        inputFiles.click();
      });
    
      fileContainers.addEventListener('keydown', (event) => {
        if(event.key === 'Enter'){
          inputFiles.click();
        }
    
      });
    
      // if user upload the file, then it will show below.
      inputFiles.addEventListener('change', ()=> {
        displayFile.style.display = 'flex';
      });
    
      // if user uploaded, to check if the file is correct, then it will show the name of file.
      inputFiles.onchange = ({target}) => {
        let file = target.files[0];
    
        if(file){
          let fileName = file.name;
          uploadFile(fileName);
        }
      }
    
      function uploadFile(fileName){
        const changename = document.getElementById('file-name');
    
        if(fileName) {
          changename.textContent = fileName;
        }
      }
    }
    InputTypeFile()
  }
  
  
  Form();