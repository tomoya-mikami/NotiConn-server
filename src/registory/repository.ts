import * as Dao from "../infra/dao/event";
import * as Repository from "../domain/repositories/event";
import { newES } from "../config/elasticsearch";

export function NewEvent(): Repository.EventRepo {
  const db: Dao.EventDB = {
    db: newES()
  };
  return new Dao.EventDao(db);
}
