import { Injectable } from '@angular/core';
import {BaseApiService} from "./base.api.service";
import {BaseModel} from "../models/base.model";
import {StatpriceModel} from "../models/statprice.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CalcApiService {
  readonly path = 'calculator/';

  constructor(public api: BaseApiService) { }

  getParams(code: string, query_params: string[]) : Observable<BaseModel<any>> {
    let params = this.api.getUrlSearchParams(query_params);
    return this.api.get<BaseModel<any>>(this.path + "params/" + code + '?' + params.toString());
  }

  getStats(code: string): Observable<BaseModel<StatpriceModel>> {
    return this.api.get<BaseModel<StatpriceModel>>(this.path + "statsprice/" + code);
  }

  getCalc(code: string, query_params: string[]) : Observable<BaseModel<any>> {
    let params = this.api.getUrlSearchParams(query_params);
    return this.api.get<BaseModel<any>>(this.path + "result/" + code + '?' + params.toString());
  }
}
