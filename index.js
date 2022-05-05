const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);


const routerTaqueria = require('./routes/taquerias.router');

app.use('/api/v1/taquerias',routerTaqueria);
app.get('/', (req,res) =>  {
    res.send('Hola estoy vivo en express')
});


app.listen(port, () => {

console.log('Mi port:' + port);
});
