import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/core/http';
import { Observable } from 'rxjs';
import { INewGameResponse } from '../interfaces/new-game-response.interface';
import { IScore } from '../interfaces/score.interface';


@Injectable({
  providedIn: 'root'
})
export class GameService {
  private readonly path = '/api/table';
  constructor(
    private readonly http: HttpClient
  ) { }

  public newGame(): Observable<INewGameResponse> {
    return this.http.post(this.path + '/newgame');
  }

  public scores(tableId: string): Observable<IScore[]> {
    return this.http.get(this.path + '/scores/' + tableId);
  }

  public join(tableId: string): Observable<any> {
    return this.http.patch(this.path + '/join/' + tableId)
  }
}
