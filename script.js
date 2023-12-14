let screen = document.querySelector(".screen")
let string = ""

let buttons = document.querySelectorAll(".col")

Array.from(buttons).forEach((btn) => {
    btn.addEventListener("click",(e) => {

        if(e.target.innerHTML == "="){
            string = eval(screen.innerHTML)
            screen.innerHTML = string
        }

        else if (e.target.innerHTML == "AC") {
            screen.innerHTML = ""
        }
        
        else {
            screen.innerHTML += e.target.innerHTML
        }

        
    })
})