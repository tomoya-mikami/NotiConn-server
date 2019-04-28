import * as Express from 'express';
import event from './handler/event';
const app = Express();
const router = Express.Router();

app.use('/event', event);

app.listen(
    3000, () => {
        console.log('Example app listening on port 3000!');
    });

export default app;
