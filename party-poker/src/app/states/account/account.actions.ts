import { AccountActionList } from "./account-action-list.const";
import { IUser } from "./interfaces/user.interface";

export namespace AccountActions {
  export class Login {
    static readonly type: AccountActionList = AccountActionList.LOGIN;
    constructor(public payload: string){
    }
  }

  export class LoginSuccess {
    static readonly type: AccountActionList = AccountActionList.LOGIN_SUCCESS;
    constructor(public payload: IUser){
    }
  }

  export class LoginFail {
    static readonly type: AccountActionList = AccountActionList.LOGIN_FAIL;
  }

  export class Reset {
    static readonly type:  AccountActionList = AccountActionList.RESET;
  }
}