import { EventModel } from "../models/event";
export abstract class EventRepo {
  abstract hoge(): string;
  abstract getEvents(): EventModel[];
  abstract save(eventModel: EventModel[]): void;
}
