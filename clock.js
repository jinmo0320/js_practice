const clock_container = document.querySelector(".js-clock");
const clock_title = clock_container.querySelector("h1");

function get_time(){
    const date = new Date();
    const hours =  date.getHours();   
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    clock_title.innerHTML = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;  
}
function init(){
    setInterval(get_time, 1000);
}
init();