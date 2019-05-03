import { EventRepo } from "../../domain/repositories/event";
import { EventModel } from "../../domain/models/event";

export type EventDomain = {
  eventRepo: EventRepo;
};

export class EventUsecase {
  constructor(private _domain: EventDomain) {}

  async saveEvents() {
    return await this._domain.eventRepo.hoge();
    const eventModels: EventModel[] = await this._domain.eventRepo.getEvents();
    return await this._domain.eventRepo.save(eventModels);
  }
}
