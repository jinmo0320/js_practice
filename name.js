const what = document.querySelector(".js-what");
const input = what.querySelector("input");
const say = document.querySelector(".js-say");
const current_user = "current_user"
const HIDE = "hide";
const SHOW = "show";

function save_name(text){
    localStorage.setItem("current_user", text)
}

function submit(event){
    event.preventDefault();
    const current_value = input.value;
    save_name(current_value);
    say_hello(current_value);
}

function ask_name(){
    what.classList.replace(HIDE , SHOW);
    what.addEventListener("submit", submit);
}

function say_hello(text){
    what.classList.replace(SHOW, HIDE);
    say.classList.replace(HIDE, SHOW);
    say.innerHTML = `Hello ${text}`;
}


function work(){
    const user_name = localStorage.getItem(current_user);
    if (user_name === null ) {
        ask_name();
    } else {
        say_hello(user_name);
    }
}

function init(){
    work()
}
init();