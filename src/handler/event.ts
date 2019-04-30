import Express = require('express');
const router = Express.Router();

router.get('/', (req: Express.Request, res: Express.Response) => {
    res.json({
        message: "see you!"
    });
});

export default router;
