import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

// テーブルのinterface（なくても大丈夫）
export interface IEvent {
  event_id: number;
  title: string;
  catches: string;
  descripion: string;
  event_url: string;
}

// テーブルの定義
@Entity()
export default class Event implements IEvent {
  // タスクのID
  @PrimaryGeneratedColumn({ type: "int" })
  event_id: number;

  // タスクのタイトル
  @Column("string")
  title: string;

  // タスクの状態
  @Column("string")
  catches: string;

  // タスクのタイトル
  @Column("string")
  descripion: string;

  // タスクのタイトル
  @Column("string")
  event_url: string;
}
