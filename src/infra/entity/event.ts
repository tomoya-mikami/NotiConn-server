import { EventModel } from "../../domain/models/event";
import { GroupModel } from "../../domain/models/group";

export function Write(
  event_id: number,
  title: string,
  catches: string,
  description: string,
  event_url: string
): EventModel {
  let model: EventModel = {
    event_id: event_id,
    title: title,
    catches: catches,
    descripion: description,
    event_url: event_url
  };
  return model;
}
