import Express = require("express");
import { EventInterface } from "../interface/event";
const router = Express.Router();
// const eventDomain: Usecase.EventDomain = { eventRepo: this._eventRepo };
// const eventUsecase = new Usecase.EventUsecase();
const eventInterface = new EventInterface();

router.get("/", async (req: Express.Request, res: Express.Response) => {
  const result = await eventInterface.saveEvents(req, res);
  res.send(result);
});

export default router;
