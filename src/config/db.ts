import { createConnection, ConnectionOptions, Connection } from "typeorm";
import Event from "../../db/tables/event";

export default class DB {
  private static _conn: Connection;

  // データベースの設定
  public static connectionOptions: ConnectionOptions = {
    type: "mysql",
    host: "noticonn-db", // 接続するDBホスト名
    port: 3306,
    username: "user", // DBユーザ名
    password: "password", // DBパスワード
    database: "noticonn", // DB名
    // 注意" これがtrueだと、モデル定義を変更すると即DB反映されます。
    // 個人PJならいいですが、普通はmigrationファイルで世代管理すると思うのでfalseにします。
    synchronize: false,
    logging: false,
    entities: [Event],
    migrations: ["db/migration/**/*.ts"],
    subscribers: ["db/subscribers/**/*.ts"]
  };

  public static async createConnection() {
    if (!this._conn) {
      this._conn = await createConnection(this.connectionOptions);
    }
    return this._conn;
  }
}
