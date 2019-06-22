import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {KPI} from '../../../classes/KPI';
import {HttpService} from '../http.service';
@Injectable({
  providedIn: 'root'
})
export class KpiService  extends HttpService<KPI, number> {

  constructor(protected _http: HttpClient) {
    super(_http, 'https://localhost:44305/api/kpis');
   }
}
