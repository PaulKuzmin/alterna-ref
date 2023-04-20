import { Injectable } from '@angular/core';
import {BaseApiService} from "./base.api.service";

@Injectable({
  providedIn: 'root'
})
export class OisApiService {
  readonly path = 'widget/ois/list/';

  constructor(public api: BaseApiService) { }

  getList(text: string) {
    return this.api.get(this.path + text);
  }

}
