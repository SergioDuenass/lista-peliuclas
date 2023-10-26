const express = require('express');

const mongoose = require('mongoose');


const app = express();



app.get('', (req, res) => {
    res.send('API works!');
});

const mongoUrl = 'mongodb+srv://temp_user:psw1234@cluster0.piewcnx.mongodb.net/todos?retryWrites=true&w=majority';

mongoose.connect(mongoUrl).then(client=> {
    app.listen(3000, ()=>{
        console.log('app is running ...');
    });
}).catch(err=>{
    console.log('No se pudo conectar a la base de datos, error: ', err)
})
