import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();
const people: object[] = [];

router
    .post('/usuarios', (req: Request, res: Response) => {
        const { nome, sobrenome } = req.body
        res.status(200).send(`Pessoa ${nome} ${sobrenome} recebida com sucesso!`);
    })

router
    .get('/usuarios', (req: Request, res: Response) => {
        res.status(200).send(`Fazendo um get no servidor!`);
    })

router
    .get('/usuarios/:id', (req: Request, res: Response) => {
        const { id } = req.params
        res.status(200).send(`Fazendo um get no servidor! id: ${id}`);
    })

.put('/usuarios/:id', (req: Request, res: Response) => {
        const { id } = req.params;
        const { nome, sobrenome } = req.body;
        res.status(200).send(`Pessoa com o id: ${id} foi atualizado para ${nome} ${sobrenome}`)
    })

.patch('/usuarios/:id', (req: Request, res: Response) => {
        const { id } = req.params;
        const { nome } = req.body;
        res.send(`Nome da pessoa com ID ${id} foi atualizado para: ${nome}`);
    })

.delete('/usuarios/:id', (req: Request, res: Response) => {
        const { id } = req.params;
        res.status(200).send(`Pessoa com o id: ${id} foi deletada `)
    })

export default router;