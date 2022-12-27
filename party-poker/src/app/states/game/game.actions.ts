import { GameActionList } from "./game-action-list.const";
import { INewGameResponse } from "./interfaces/new-game-response.interface";
import { IScore } from "./interfaces/score.interface";

export namespace GameActions {
  export class NewGame {
    static readonly type: GameActionList = GameActionList.NEW_GAME;
  }

  export class NewGameSuccess {
    static readonly type: GameActionList = GameActionList.NEW_GAME_SUCCESS;
    constructor(public payload: INewGameResponse){
    }
  }

  export class NewGameFail {
    static readonly type: GameActionList = GameActionList.NEW_GAME_FAIL;
  }

  export class Scores {
    static readonly type: GameActionList = GameActionList.SCORES;
    constructor(public payload: string){
    }
  }

  export class ScoresSuccess {
    static readonly type: GameActionList = GameActionList.SCORES_SUCCESS;
    constructor(public payload: IScore[]){
    }
  }

  export class ScoresFail {
    static readonly type: GameActionList = GameActionList.SCORES_FAIL;
  }

  export class Join {
    static readonly type: GameActionList = GameActionList.JOIN;
    constructor(public payload: string){
    }
  }

  export class JoinFail {
    static readonly type: GameActionList = GameActionList.JOIN_FAIL;
  }

  export class JoinSuccess {
    static readonly type: GameActionList = GameActionList.JOIN_SUCCESS;
    constructor(public payload: any){
    }
  }

  export class Reset {
    static readonly type: GameActionList = GameActionList.RESET;
  }
}