const para = document.getElementById("msg")
console.log(para.innerText);
para.innerText = "This is set via JavaScript"
const hiButton = document.querySelector(".js-button")
//const hiButton = document.querySelector(".js-button")

//Event Listener
hiButton.addEventListener("click", () => {
    console.log("Hi to Everyone Here!!!");
});