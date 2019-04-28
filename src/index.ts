import Express from 'express';
const app = Express()
const router = Express.Router();

router.get(
    '/',
    (req: Express.Request, res: Express.Response) => {
        return res.send('Hello world.');
    });

app.listen(
    3000,
    () => {
        console.log('Example app listening on port 3000!');
    });

export default router;
