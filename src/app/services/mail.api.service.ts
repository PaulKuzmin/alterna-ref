import { Injectable } from '@angular/core';
import {BaseApiService} from "./base.api.service";
import {BaseModel} from "../models/base.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MailApiService {
  readonly path = 'mailto';

  constructor(public api: BaseApiService) { }

  sendRequest(query_params: any) : Observable<BaseModel<any>> {
    return this.api.post<BaseModel<any>>(this.path, query_params);
  }

  captcha(): string {
    let today = new Date();
    console.log(today);
    return 'https://alternadv.com/captcha?_=' + today.getTime();
  }
}
