import { Injectable } from '@angular/core';
import {BaseApiService} from "./base.api.service";

@Injectable({
  providedIn: 'root'
})
export class CalcApiService {
  readonly path = 'widget/calculator/';

  constructor(public api: BaseApiService) { }

  getParams(code: string, query_params: string[]) {
    let params = this.api.getUrlSearchParams(query_params);
    return this.api.get(this.path + "params/" + code + '?' + params.toString());
  }

  getStats(code: string) {
    return this.api.get(this.path + "statsprice/" + code);
  }

  getCalc(code: string, query_params: string[]) {
    let params = this.api.getUrlSearchParams(query_params);
    return this.api.get(this.path + "result/" + code + '?' + params.toString());
  }
}
