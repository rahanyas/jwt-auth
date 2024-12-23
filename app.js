import express from 'express'
import db_connect from './db.js';
import dotenv from 'dotenv';
import router from './router.js';

const app = express();
const port = 7777;

dotenv.config()
db_connect();

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use('/', router);

app.listen(port, () => {
  console.log(`server is running on ${port}`)
})