import { Injectable } from '@angular/core';
import {BaseApiService} from "./base.api.service";

@Injectable({
  providedIn: 'root'
})
export class MailApiService {
  readonly path = 'widget/mailto';

  constructor(public api: BaseApiService) { }

  sendRequest(query_params: string[]) {
    return this.api.post(this.path, query_params);
  }
}
