
//login password show and hide program
// check box
function check() {
    var x = document.getElementById("pass");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  // ***************************THEME*******************************
  const htmlEl = document.getElementsByTagName('html')[0];
  const toggleTheme = (theme) => {
      htmlEl.dataset.theme = theme;
  }
// *************************Home Page Counter****************
const counters = document.querySelectorAll(".counters span");
const container = document.querySelector(".counters");

let activated = false;

window.addEventListener("scroll",  () =>{
  if(
    pageYOffset > container.offsetTop - container.offsetHeight - 200 && activated === false
  ){
    counters.forEach(counter => {
      counter.innerText = 0;
      let count = 0;

      function updateCount(){
        const target = parseInt(counter.dataset.count);
        if(count < target){
          count = count+100;
          counter.innerText = count;
          setTimeout(updateCount, 10);
        } else{
          counter.innerText = target;
        }
      }
      updateCount();
      activated = true;
    });
  } else if(
    pageYoffset < container.offsetTop - container.offsetHeight - 500 || pageYoffset === 0 && activated === true
  ) {
    counters.forEach(counter => {
      counter.innerText = 0;
    });
    activated = false;
  }
});
// Auto Moving Carousel
var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);


//=========================Dashboard=========================
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
  const select = dropdown.querySelector('.select');
  const caret = dropdown.querySelector('.caret');
  const menu = dropdown.querySelector('.menu');
  const options = dropdown.querySelectorAll('.menu li');
  const selected = dropdown.querySelector('.selected');
  

  select.addEventListener('click', () => {
    select.classList.toggle('select-clicked');
    caret.classList.toggle('caret-rotate');
    menu.classList.toggle('menu-open');
  });
  options.forEach(option => {
    option.addEventListener('click', () => {
      selected.innerText = option.innerText;
      select.classList.remove('select-clicked');
      caret.classList.remove('caret-rotate');
      menu.classList.remove('menu-open');
      options.forEach(option => {
        option.classList.remove('active');
      });
      option.classList.add('active');
    });
  });
});