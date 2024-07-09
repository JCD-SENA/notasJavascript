const note1 = document.getElementById("note1")
const note2 = document.getElementById("note2")
const note3 = document.getElementById("note3")

const frmNotes = document.getElementById("form")
const final = document.getElementById("finalNote")

frmNotes.addEventListener("submit", (e) => {
    e.preventDefault()
    let d1 = Number(note1.value)
    let d2 = Number(note2.value)
    let d3 = Number(note3.value)
    let result = ((d1 * 0.3) + (d2 * 0.3) + (d3 * 0.4)).toFixed(2)
    //Que acepte de 1 a 5
    //Pasar input, calcular resultado y valid mensaje en funciones
    if (result == 5) {
        final.innerText = "Congrats: "+result
        final.style.color = "green"
    } else if (result >= 3.5 && result < 5) {
        final.innerText = "Aprovado: "+result
        final.style.color = "green"
    } else  {
        final.innerText = "Reprovó: "+result
    }
})