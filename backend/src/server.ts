import express from 'express';
import './database/connection';

const app = express();
app.use(express.json()); /* Para retornar Json */

app.get('/', (req, res) => {
    return res.send("Hello");
});

app.listen(3000);



/* Executar typescript em uma api backend */
/* 
1 - yarn init -y
2 - yarn add express
3 - yarn add typescript -D
4 - yarn add @types/express -D
5 - yarn tsc --init
6 - yarn add ts-node-dev -D
*/

/* Execucao do Banco de dados */
/* 
1 - yarn add typeorm sqlite3 
2 - yarn typeorm migration:create -n create_orphanages       Faz as migracoes
*/