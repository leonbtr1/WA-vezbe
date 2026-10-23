import express from "express"

const app = express()

let PORT = 8000

// poslužitelj sluša na PORTU 8000
app.listen(PORT, () => {
    console.log(`Server na ${PORT}`)
})