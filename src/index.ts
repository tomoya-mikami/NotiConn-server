import Express = require("express");
import event from "./router/event";
const app = Express();

app.all("*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  console.log("allow cors");
  next();
});

app.use("/event", event);

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});

export default app;
