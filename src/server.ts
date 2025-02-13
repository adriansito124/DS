import express from 'express';
import initRouts from './routes/routes.ts';
// import connectDB from '.database/mon'

const app = express();
const port = 8080;
initRouts(app)

app.listen(port, () => console.log(`Acesse: http://localhost:${port}/`));

app.get('/getTeste', (req, res) => {
    res.send('GET: Requisição recebida com sucesso!');
});
