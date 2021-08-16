const toggleSwitch = document.querySelector('input[type="checkbox"]');
const header=document.getElementById('header');
const hamburgerIcon = document.querySelector('.hamburger');
const textPara = document.querySelector('.section__text');
const toggleIcon = document.getElementById('toggle-icon');
const images =document.querySelectorAll('.image__container img');

// the hamburger menu functionality
hamburgerIcon.addEventListener('click',()=>{
    const navBar = document.querySelector('.navbar');
    navBar.classList.toggle('show-hide');
})

//function to toggle images
function changeImage(theme){
    [...images].forEach((img)=>{
        let imgLink = img.src.split('_');
            img.src= `${imgLink[0]}_${imgLink[1]}_${imgLink[2]}_${theme}.svg`;
    })
}
// Dark Mode Styles
function darkMode() {
  header.style.backgroundColor = 'rgb(0 0 0 / 50%)';
  textPara.style.backgroundColor = 'rgb(255 255 255 / 50%)';
  toggleIcon.children[0].textContent = 'Dark Mode';
  toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
  changeImage('dark');
}

// Light Mode Styles
function lightMode() {
  header.style.backgroundColor = 'rgb(255 255 255 / 50%)';
  textPara.style.backgroundColor = 'rgb(0 0 0 / 50%)';
  toggleIcon.children[0].textContent = 'Light Mode';
  toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
  changeImage('light');
}
// listen for change event on the toggle switch
toggleSwitch.addEventListener('change',function(e){
    if(e.target.checked){
        // set the root
        document.documentElement.setAttribute('data-theme', 'dark');
        // add to local storage
         localStorage.setItem('theme', 'dark');
        // call the fn
         darkMode();
    }else{
        // set the root
        document.documentElement.setAttribute('data-theme', 'light');
        // add to local storage
        localStorage.setItem('theme', 'light');
        // call the fn
        lightMode();
    }

})

// Check Local Storage For Theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
    darkMode();
  }
}


