import { Injectable } from '@angular/core';
import {BaseApiService} from "./base.api.service";

@Injectable({
  providedIn: 'root'
})
export class AutocalcApiService {
  readonly path = 'widget/calcauto/';

  constructor(public api: BaseApiService) { }

  getParams(vehicle: string, query_params: string[]) {
    let params = this.api.getUrlSearchParams(query_params);
    return this.api.get(this.path + "params/" + vehicle + '?' + params.toString());
  }

  getCalc(vehicle: string, query_params: string[]) {
    let params = this.api.getUrlSearchParams(query_params);
    return this.api.get(this.path + "result/" + vehicle + '?' + params.toString());
  }
}
