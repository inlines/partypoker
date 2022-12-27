import { IScore } from "./interfaces/score.interface";

export interface IGameState {
  scores: IScore[];
  table: any;
  tableId: string;
}