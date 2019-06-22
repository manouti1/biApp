import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService extends HttpService<Account, number> {

  constructor(protected _http: HttpClient) {
    super(_http, 'https://localhost:44305/api/accounts');
   }
}
