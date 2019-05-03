import rp = require("request-promise");
import { EventRepo } from "../../domain/repositories/event";
import { EventModel } from "../../domain/models/event";
import * as ES from "elasticsearch";
import * as EventEntity from "../entity/event";

export type EventDB = {
  db: ES.Client;
};

export class EventDao extends EventRepo {
  constructor(private es: EventDB) {
    super();
  }
  hoge(): string {
    return "success!!!";
  }
  getEvents(): EventModel[] {
    const baseUrl: string = "https://connpass.com/api/v1/event";
    const options = {
      uri: baseUrl,
      method: "GET",
      qs: {
        count: 100,
        order: 3
      },
      headers: {
        "User-Agent": "Request-Promise"
      },
      json: true
    };
    let models: EventModel[] = [];
    rp(options)
      .then(body => {
        // ここでjsonパースしてWriteして型変換してreturn
        const parsedBody = JSON.parse(body);
        parsedBody.forEach(
          (val: {
            event_id: number;
            title: string;
            catch: string;
            description: string;
            event_url: string;
          }) => {
            const m: EventModel = EventEntity.Write(
              val.event_id,
              val.title,
              val.catch,
              val.description,
              val.event_url
            );
            models.push(m);
          }
        );
        return models;
      })
      .catch(err => {
        return null;
      });
    return models;
  }

  async save(eventModel: EventModel[]) {}
}
