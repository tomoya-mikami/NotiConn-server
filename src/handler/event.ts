import Express = require("express");
import rp = require("request-promise");
const router = Express.Router();

router.get("/", async (req: Express.Request, res: Express.Response) => {
  const baseUrl: string = "https://connpass.com/api/v1/event";
  const options = {
    uri: baseUrl,
    qs: {
      count: 100,
      order: 3
    },
    json: true
  };
  rp(options)
    .then(body => {
      res.json(body);
    })
    .catch(err => {
      res.json(err);
    });
  //   const responseEvent = await rp.get(options);
  return;
});

export default router;
