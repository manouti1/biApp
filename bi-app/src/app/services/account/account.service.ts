import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { HttpClient } from '@angular/common/http';
import {Account} from '../../../classes/Account';

@Injectable({
  providedIn: 'root'
})
export class AccountService extends HttpService<Account, number> {

  constructor(protected _http: HttpClient) {
    super(_http, 'https://localhost:44305/api/accounts');
   }
}
