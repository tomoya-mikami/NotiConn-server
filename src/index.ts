import Express = require('express');
import event from './handler/event';
const app = Express();

app.use('/event', event);

app.listen(
    3000, () => {
        console.log('Example app listening on port 3000!');
    });

export default app;
