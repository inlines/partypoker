export enum GameActionList {
  NEW_GAME = '[GAME] new game request',
  NEW_GAME_SUCCESS = '[GAME] new game success',
  NEW_GAME_FAIL = '[GAME] new game fail',

  SCORES = '[GAME] scores request',
  SCORES_SUCCESS = '[GAME] scores success',
  SCORES_FAIL = '[GAME] scores fail',

  JOIN = '[GAME] join request',
  JOIN_SUCCESS = '[GAME] join success',
  JOIN_FAIL = '[GAME] join fail',

  RESET = '[GAME] reset'
}