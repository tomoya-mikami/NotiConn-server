import * as Dao from "../infra/dao/event";
import * as Repository from "../domain/repositories/event";
import { newES } from "../config/elasticsearch";
import { DB } from "../config/db";

export function NewEvent(): Repository.EventRepo {
  const db: Dao.EventDB = {
    es: newES()
    db: DB.createk
  };
  return new Dao.EventDao(db);
}
