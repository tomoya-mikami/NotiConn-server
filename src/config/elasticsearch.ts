import { Client } from "elasticsearch";
import "./env";

export function newES(): Client {
  return new Client({
    host: `localhost:${process.env.ES_PORT}`
  });
}
