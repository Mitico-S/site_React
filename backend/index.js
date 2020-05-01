const express = require('express');

const app = express();

app.get ('/', (request, response) => {
    return response.json({
        evento: 'Treino React',
        Aluno: 'João Pedro'
    });

});

app.listen(3333);