const express = require('express');
const app = express();



app.get('/results/:n1/:n2',(request,response)=>{
    response.send(`El resultado de ${request.params.n1} + ${request.params.n2} es ${parseFloat(request.params.n1)+parseFloat(request.params.n2)}`);
});

app.post('/results/:n1/:n2',(request,response)=>{
    response.send(`El resultado de ${request.params.n1} * ${request.params.n2} es ${parseFloat(request.params.n1)*parseFloat(request.params.n2)}`);
});

app.put('/results/:n1/:n2',(request,response)=>{
    response.send(`El resultado de ${request.params.n1} / ${request.params.n2} es ${(parseFloat(request.params.n1))/(parseFloat(request.params.n2))}`);
});

app.patch('/results/:n1/:n2',(request,response)=>{
    response.send(`El resultado de ${request.params.n1} ^ ${request.params.n2} es ${Math.pow(parseFloat(request.params.n1),parseFloat(request.params.n2))}`);
});

app.delete('/results/:n1/:n2',(request,response)=>{
    response.send(`El resultado de ${request.params.n1} - ${request.params.n2} es ${parseFloat(request.params.n1)-parseFloat(request.params.n2)}`);
});

app.listen(4000,()=>{
    console.log("App up and running");
});