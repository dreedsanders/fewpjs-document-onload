// Your code goes here
document.addEventListener("DOMContentLoaded", function(){
    changeDOM()
});

console.log(
    "This console.log() fires when index.js loads - before DOMContent Loaded is triggered"
);

function changeDOM (){
    let text = document.getElementById("text")
    text.innerHTML = "This is really cool!"
};