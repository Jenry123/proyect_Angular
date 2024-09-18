import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/iuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url_base = "https://jsonplaceholder.typicode.com/users/"

  constructor(private _http: HttpClient) { }


  getAll(): Observable<IUser[]>{
    return this._http.get<IUser[]>(this.url_base);
  }

  get(): Observable<IUser>{
    return this._http.get<IUser>(this.url_base + "1");
  }

}
