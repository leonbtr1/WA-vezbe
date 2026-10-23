const express = require('express');

const app = express(); // u varijablu app pohranjujemo objekt koji predstavlja Express aplikaciju

const PORT = 3000; // port na kojem će poslužitelj slušati zahtjeve

app.listen(PORT, function () {
    console.log(`Server je pokrenut na http://localhost:${PORT}`);
});