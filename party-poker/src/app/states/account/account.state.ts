import { Injectable } from "@angular/core";
import { Action, State, StateContext } from "@ngxs/store";
import { catchError, map } from "rxjs/operators";
import { ACCOUN_STATE_DEFAULTS } from "./account-state-defaults.const";
import { IAccountState } from "./account-state.interface";
import { AccountActions } from "./account.actions";
import { AccountService } from "./services/account.service";

@State<IAccountState>({
  name: 'account',
  defaults: ACCOUN_STATE_DEFAULTS
})
@Injectable()
export class AccountState {
  constructor(
    private service: AccountService
  ) {
  }

  @Action(AccountActions.Login)
  public login(ctx: StateContext<IAccountState>, action: AccountActions.Login) {
    return this.service.login(action.payload).pipe(
      map((user) =>
        ctx.dispatch(new AccountActions.LoginSuccess(user)),
      ),
      catchError(() => ctx.dispatch(new AccountActions.LoginFail()))
    );
  }

  @Action(AccountActions.LoginSuccess)
  public loginSuccess(ctx: StateContext<IAccountState>, action: AccountActions.LoginSuccess) {
    ctx.patchState({
      user: action.payload
    });
    console.warn('LOGIN SUCCESS');
  }

  @Action(AccountActions.LoginFail)
  public loginFail(ctx: StateContext<IAccountState>, action: AccountActions.LoginFail) {
    console.warn('LOGIN FAIL');
  }

  @Action(AccountActions.Reset)
  public reset(ctx: StateContext<IAccountState>) {
    ctx.setState(ACCOUN_STATE_DEFAULTS);
  }

}