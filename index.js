const express = require('express');
const app = express();
const port = 3000;
const routerTaqueria = require('./routes/taquerias.router');


app.use('/api/v1/taquerias',routerTaqueria);
app.use(express.json());

app.get('/', (req,res) =>  {
    res.send('Hola estoy vivo en express')
});


app.listen(port, () => {

console.log('Mi port:' + port);
});
