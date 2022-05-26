var navbar = document.querySelector('.nav')

window.onscroll = function() {

  // pageYOffset or scrollY
  if (window.pageYOffset > 0) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
}

document.querySelector('.toggler').onclick = () => {
  document.querySelector('.nav').classList.toggle('open');
}

//Revealing the answers

let _21ans= document.getElementById("_21ans");
let _22ans= document.getElementById("_22ans");
let _23ans= document.getElementById("_23ans");
let _24ans= document.getElementById("_24ans");

let _21 =document.querySelector("._21");

_21ans.addEventListener("click",(e)=>{
  e.preventDefault();
  if(!(_21ans.classList.contains("shown"))){
    _21ans.classList.add("shown");
    _21.style.display="block";
    _21ans.textContent="Hide Answer";

  }
  else{
    _21ans.classList.remove("shown");
    _21.style.display="none";
    _21ans.textContent="Show Answer";

  }

});


let _22 =document.querySelector("._22");

_22ans.addEventListener("click",(e)=>{
  e.preventDefault();
  if(!(_22ans.classList.contains("shown"))){
    _22ans.classList.add("shown");
    _22.style.display="block";
    _22ans.textContent="Hide Answer";

  }
  else{
    _22ans.classList.remove("shown");
    _22.style.display="none";
    _22ans.textContent="Show Answer";

  }

});



let _23 =document.querySelector("._23");

_23ans.addEventListener("click",(e)=>{
  e.preventDefault();
  if(!(_23ans.classList.contains("shown"))){
    _23ans.classList.add("shown");
    _23.style.display="block";
    _23ans.textContent="Hide Answer";
  }
  else{
    _23ans.classList.remove("shown");
    _23.style.display="none";
    _23ans.textContent="Show Answer";

  }

});



let _24 =document.querySelector("._24");

_24ans.addEventListener("click",(e)=>{
  e.preventDefault();
  if(!(_24ans.classList.contains("shown"))){
    _24ans.classList.add("shown");
    _24.style.display="block";
    _24ans.textContent="Hide Answer";

  }
  else{
    _24ans.classList.remove("shown");
    _24.style.display="none";
    _24ans.textContent="Show Answer";

  }

});