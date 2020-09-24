import { interpreter } from "./main.js"

document.querySelector("button").onclick = () => {
    document.getElementById("output").innerHTML = interpreter(document.getElementById("input").value)
}
