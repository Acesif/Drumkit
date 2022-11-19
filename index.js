window.addEventListener("keydown",(e)=>{
    let key = document.querySelector(`audio[data-key="${e.key}"]`);
    let btn = document.querySelector(`.button[data-key="${e.key}"]`)
    if(!key){return;}
    else{
        key.currentTime = 0;
        key.play();
        btn.classList.add("play");
    }
})
window.addEventListener("click",(e)=>{
    let pressed = e.path[0].getAttribute("data-key");
    let key = document.querySelector(`audio[data-key="${pressed}"]`);
    let btn = document.querySelector(`.button[data-key="${pressed}"]`)
    if(pressed == null){return;}
    else{
        key.currentTime = 0;
        key.play();
        btn.classList.add("play");
    }
})
let btnAll = document.querySelectorAll(".button");
btnAll.forEach(btn => addEventListener("transitionend", function(){
btn.classList.remove("play");
}))