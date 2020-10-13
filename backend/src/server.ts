import express from 'express';

const app = express();

app.get('/', (req, res) => {
    return res.send("Hello");
});

app.listen(3333);



/* Executar typescript para backend */
/* 
1 - yarn init -y
2 - yarn add express
3 - yarn add typescript -D
4 - yarn add @types/express -D
5 - yarn tsc --init
6 - yarn add ts-node-dev -D
*/