import * as Usecase from "../usecase/usecases/event";
import * as Repository from "../registory/repository";
import { EventRepo } from "../domain/repositories/event";

export class EventInterface {
  private _eventRepo: EventRepo = Repository.NewEvent();
  private eventDomain: Usecase.EventDomain = { eventRepo: this._eventRepo };
  private eventUsecase: Usecase.EventUsecase;

  constructor() {
    this.eventUsecase = new Usecase.EventUsecase(this.eventDomain);
  }
  async saveEvents(req: any, res: any) {
    const events = await this.eventUsecase.saveEvents();
    return events;
  }
}
