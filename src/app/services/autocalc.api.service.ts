import { Injectable } from '@angular/core';
import {BaseApiService} from "./base.api.service";
import {Observable} from "rxjs";
import {BaseModel} from "../models/base.model";

@Injectable({
  providedIn: 'root'
})
export class AutocalcApiService {
  readonly path = 'calcauto/';

  constructor(public api: BaseApiService) { }

  getParams(vehicle: string, query_params: string[]): Observable<BaseModel<any>> {
    let params = this.api.getUrlSearchParams(query_params);
    return this.api.get<BaseModel<any>>(this.path + "params/" + vehicle + '?' + params.toString());
  }

  getCalc(vehicle: string, query_params: any): Observable<BaseModel<any>> {
    let params = this.api.getUrlSearchParams(query_params);
    return this.api.get<BaseModel<any>>(this.path + "result/" + vehicle + '?' + params.toString());
  }
}
