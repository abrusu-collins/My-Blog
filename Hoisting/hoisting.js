let ans1 = document.querySelector(".ans1");
let ans2 = document.querySelector(".ans2");
let ans3 = document.querySelector(".ans3");
let ans4 = document.querySelector(".ans4");
let show1 = document.querySelector(".show1");
let show2 = document.querySelector(".show2");
let show3 = document.querySelector(".show3");
let show4 = document.querySelector(".show4");

show1.addEventListener("click", (e)=>{
    e.preventDefault();
    ans1.classList.toggle("no-display");
    if(ans1.classList.contains("no-display")){
        show1.textContent="Show Answer";
    }
    else{
        show1.textContent="Hide Answer";
    }
});
show2.addEventListener("click", (e)=>{
    e.preventDefault();
    ans2.classList.toggle("no-display");
    if(ans2.classList.contains("no-display")){
        show2.textContent="Show Answer";
    }
    else{
        show2.textContent="Hide Answer";
    }
});
show3.addEventListener("click", (e)=>{
    e.preventDefault();
    ans3.classList.toggle("no-display");
    if(ans3.classList.contains("no-display")){
        show3.textContent="Show Answer";
    }
    else{
        show3.textContent="Hide Answer";
    }
});
show4.addEventListener("click", (e)=>{
    e.preventDefault();
    ans4.classList.toggle("no-display");
    if(ans4.classList.contains("no-display")){
        show4.textContent="Show Answer";
    }
    else{
        show4.textContent="Hide Answer";
    }
});