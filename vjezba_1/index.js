import express from "express"
import path from "path"

const app = express()
const __dirname = path.resolve()

let PORT = 8000

// RUTA/endpoint = "/"
// HTTP metoda = get
// prvi parametar = HTTP REQuest
// drugi parametar = HTTP RESponse
app.get("/", (req, res) => {
    console.log("Pozvana je GET metoda na def endpointu")
    res.sendFile(__dirname + "/public/index.html")
})

let pizze = [
    {id: 1, naziv:"Marga", cijena: 15},
    {id: 2, naziv:"Diavola", cijena: 20},
    {id: 3, naziv:"neka", cijena: 35}
]

let users = [
    {id: 1, ime:"Bobix", prezime:"shto"},
    {id: 2, ime:"Penka", prezime:"smo"},
    {id: 3, ime:"Singer", prezime:"ica"}
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

app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/public/about.html")
})

app.get("/users", (req, res) => {
    res.json(users)
})