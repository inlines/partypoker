import { Injectable } from "@angular/core";
import { Action, State, StateContext } from "@ngxs/store";
import { GAME_STATE_DEFAULTS } from "./game-state-defaults.const";
import { IGameState } from "./game-state.interface";
import { GameActions } from "./game.actions";
import { INewGameResponse } from "./interfaces/new-game-response.interface";
import { GameService } from "./services/game.service";
import { catchError, map } from "rxjs/operators";

@State<IGameState>({
  name: 'game',
  defaults: GAME_STATE_DEFAULTS
})
@Injectable()
export class GameState {
  constructor(
    private service: GameService
  ){}

  @Action(GameActions.NewGame)
  public newGame(ctx: StateContext<IGameState>, action: GameActions.NewGame) {
    return this.service.newGame().pipe(
      map((newGameResponse: INewGameResponse) =>
        ctx.dispatch(new GameActions.NewGameSuccess(newGameResponse))
      ),
      catchError(() => ctx.dispatch(new GameActions.NewGameFail))
    )
  }

  @Action(GameActions.NewGameSuccess)
  public newGameSuccess(ctx: StateContext<IGameState>, action: GameActions.NewGameSuccess) {
    ctx.patchState({
      tableId: action.payload.tableId
    })
  }

  @Action(GameActions.NewGameFail)
  public newGameFail() {
    console.warn('new game failed');
  }

  @Action(GameActions.Scores)
  public scores(ctx: StateContext<IGameState>, action: GameActions.Scores) {
    return this.service.scores(action.payload).pipe(
      map((scores) => {
        ctx.dispatch(new GameActions.ScoresSuccess(scores))
      }),
      catchError(() => ctx.dispatch(new GameActions.ScoresFail))
    )
  }

  @Action(GameActions.ScoresSuccess)
  public scoresSuccess(ctx: StateContext<IGameState>, action: GameActions.ScoresSuccess) {
    ctx.patchState({
      scores: action.payload
    });
  }

  @Action(GameActions.ScoresFail)
  public scoresFail(ctx: StateContext<IGameState>, action: GameActions.ScoresFail) {
    console.warn('SCORES FAILED');
  }

  @Action(GameActions.Join)
  public join(ctx: StateContext<IGameState>, action: GameActions.Join) {
    return this.service.join(action.payload).pipe(
      map(response => ctx.dispatch(new GameActions.JoinSuccess(response))),
      catchError(() => ctx.dispatch(new GameActions.JoinFail()))
    )
  }

  @Action(GameActions.Reset)
  public reset (ctx: StateContext<IGameState>) {
    ctx.setState(GAME_STATE_DEFAULTS);
  }
}