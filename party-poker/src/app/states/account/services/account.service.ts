import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/core/http';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private readonly path = '/api/login';
  constructor(
    private readonly http: HttpClient
  ) { }

  public login(userName: string): Observable<IUser> {
    return this.http.post(this.path, {userName});
  }
}
