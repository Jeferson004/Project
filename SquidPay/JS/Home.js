
let openDropdown = null;
let isNavOpen = false;
let lastScrollTop = 0;




/* ========== SHOW NAV MENU ========== */
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('show-menu');
const backDrop = document.getElementById('backdrop');
const body = document.body;
isNavOpen = false;


navToggle.addEventListener('click', () => {   
  navMenu.classList.toggle('show-menu');
  navToggle.classList.toggle('show-icon')

  isNavOpen = !isNavOpen;

  if (isNavOpen) {
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = 'auto';
  }

  if(isNavOpen && openDropdown) {
    openDropdown.classList.remove('active');
  }
});





/* ========== SHOW NAV DROPDOWN ========== */
const items = document.querySelectorAll('.nav-items');

document.addEventListener('click', (event) => {
  if (!event.target.closest('.sub-list')) {
    if (openDropdown) {
      openDropdown.classList.remove('active');
      openDropdown = null;
    }
  }
});

items.forEach(item => {
  const dropdown = item.querySelector('.sub-list');

  item.addEventListener('click', (event) => {
    event.stopPropagation();

    if (openDropdown && openDropdown !== dropdown) {
      openDropdown.classList.remove('active');
    }

    dropdown.classList.toggle('active');
    openDropdown = dropdown.classList.contains('active')
    ? dropdown : null;
  });
});





/* ========== HEADER HIDE AND SHOW ========== */
const header = document.querySelector('header');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {

  if(lastScrollY < window.scrollY){
    header.style.zIndex = '-1';
    header.style.opacity = '0';
  }

  else {
    header.style.zIndex = '999';
    header.style.opacity = '1';
  }

  if(header && openDropdown){
    openDropdown.classList.remove('active');
  }

  lastScrollY = window.scrollY;
});





/* ========== BODY ANIMMATION ========== */
const Body = document.querySelectorAll('body');

Body.forEach(function(body) {
  body.classList.add("body-animate");
});





/* ========== SECTION ANIMMATION ========== */
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add('show-section');
    }
    // else {
    //   entry.target.classList.remove('show-section');
    // }
  });
});

const sectionAnimation = document.querySelectorAll('.hidden-section');
sectionAnimation.forEach((el) => observer.observe(el));



// test
// const radioBoxes = document.querySelectorAll('.radio-box');

// radioBoxes.forEach((radioBox) => {
//   radioBox.addEventListener('click', () => {
//     const inputRadio = radioBox.querySelector('input[type="radio"]');
    
//     if (inputRadio) {
//       inputRadio.click();
//     }
//   });

//   const inputRadio = radioBox.querySelector('input[type="radio"]');
//   radioBox.addEventListener('keydown', (event)=> {
//     if(event.key === 'Enter'){
//       inputRadio.click();
//     }

//   })
// });




// function FileAttacher() {
//   const fileContainers = document.getElementById('file-container');
//   const inputFiles = document.getElementById('input-file');
//   const changename = document.getElementById('file-name');
//   const submitBtn = document.getElementById('submitBtn');
//   const displayFile = document.getElementById('display-file');

  
//   // Start inputField
//   function inputField(){
//     function inputFilled() {
//       const inputField = document.querySelectorAll('.input-field');

//       for(const field of inputField){
//         if (field.value.trim() === '') {
//           return false;
//         } 
//       }
//       return true;
//     }

//     function submitForm(){
//       if(inputFilled()){
//         submitBtn.disabled = false;
//         submitBtn.classList.remove('default-submitBtn');
//         submitBtn.classList.add('submitbutton');
//       }

//       else {
//         submitBtn.disabled = true;
//         submitBtn.classList.remove('submitbutton');
//         submitBtn.classList.add('default-submitBtn');
//       }
//     }

//     const inputFields = document.querySelectorAll('.input-field');
//     inputFields.forEach((field) => {
//       field.addEventListener('input', submitForm);
//     });
//     submitForm();

//     // if the page is refresh or reload, will clear all input field value.
//     function clearForm() {
//       document.getElementById('form').reset();
//       submitBtn.classList.remove('submitbutton');
//       submitBtn.classList.add('default-submitBtn');
//     }
//     window.addEventListener('load', clearForm);

//   }
//   inputField()
//   // End inputField


  
//   function InputTypeFile(){
//     // if user click input Input, then user able to upload.
//     fileContainers.addEventListener('click', () => {
//       inputFiles.click();
//     });
  
//     fileContainers.addEventListener('keydown', (event) => {
//       if(event.key === 'Enter'){
//         inputFiles.click();
//       }
  
//     });
  
//     // if user upload the file, then it will show below.
//     inputFiles.addEventListener('change', ()=> {
//       displayFile.style.display = 'flex';
//     });
  
//     // if user uploaded, to check if the file is correct, then it will show the name of file.
//     inputFiles.onchange = ({target}) => {
//       let file = target.files[0];
  
//       if(file){
//         let fileName = file.name;
//         uploadFile(fileName);
//       }
//     }
  
//     function uploadFile(fileName){
//       const changename = document.getElementById('file-name');
  
//       if(fileName) {
//         changename.textContent = fileName;
//       }
//     }
//   }
//   InputTypeFile()
// }


// FileAttacher();






