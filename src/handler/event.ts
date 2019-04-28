import Express from 'express';
const router = Express.Router();

router.get('/', (req: Express.Request, res: Express.Response) => {
    res.send('hallo!!!!!!!!!!!!!');
});

export default router;
