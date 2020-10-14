import express, { request } from 'express';
import path from 'path';
import 'express-async-errors';
import './database/connection';
import routes from './routes';
import './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(express.json()); /* Para retornar Json */
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler);
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
3 - yarn typeorm migration:run       Cria as tabelas das migrations
4 - DESFAZ TUDO     yarn typeorm migration:revert
*/