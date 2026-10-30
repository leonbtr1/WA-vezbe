import express from "express"

const app = express()

let PORT = 8000

// RUTA/endpoint = "/"
// HTTP metoda = get
// prvi parametar = HTTP REQuest
// drugi parametar = HTTP RESponse
app.get("/", (req, res) => {
    console.log("Pozvana je GET metoda na def endpointu")
    res.send("Poz iz servera")
})

let pizze = [
    {id: 1, naziv:"Marga", cijena: 15},
    {id: 2, naziv:"Diavola", cijena: 20},
    {id: 3, naziv:"neka", cijena: 35}
]

// ovo je spremljeno na DB(skoro uvik)
// HTTP šalje GET  
app.get("/pizze", (req, res) => {
    console.log("Pozvana je GET metoda na /pizze endpointu")
    res.json(pizze)
})

// poslužitelj sluša na PORTU 8000
app.listen(PORT, () => {
    console.log(`Server na ${PORT}`)
})

app.get("/bzvz", (req, res) => {
    res.sendFile(__dirname + '')
})