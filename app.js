const color1 = document.querySelector("#color1")
const color2 = document.querySelector("#color2")
const p = document.querySelector("p")
const body = document.querySelector("body")

const backgroundColor = () => {
    body.style.background = 
        "linear-gradient(to right, " 
        + color1.value 
        + ", " 
        + color2.value 
        + ")";

    p.textContent = body.style.background + ";"
}

backgroundColor()

color1.addEventListener("input", backgroundColor)

color2.addEventListener("input",backgroundColor)