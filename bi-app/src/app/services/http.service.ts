import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpOperations } from './http-operations.interface';

@Injectable({
  providedIn: 'root'
})
export abstract class HttpService<T, ID> implements HttpOperations<T, ID> {

  constructor( protected _http: HttpClient,
    protected _base: string) { }


    save(t: T): Observable<T> {
      return this._http.post<T>(this._base, t);
    }
    update(id: ID, t: T): Observable<T> {
      return this._http.put<T>(this._base + "/" + id, t, {});
    }
    findOne(id: ID): Observable<T> {
      return this._http.get<T>(this._base + "/" + id);
    }
    findAll(): Observable<T[]> {
      return this._http.get<T[]>(this._base);
    }
    delete(id: ID): Observable<T> {
      return this._http.delete<T>(this._base + '/' + id);
    }
}
