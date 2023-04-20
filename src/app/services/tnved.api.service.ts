import { Injectable } from '@angular/core';
import {BaseApiService} from "./base.api.service";

@Injectable({
  providedIn: 'root'
})
export class TnvedApiService {
  readonly path = 'widget/tnved/';

  constructor(public api: BaseApiService) { }

  getNode(id: number) {
    return this.api.get(this.path + 'node/' + id);
  }

  getCode(code: string) {
    return this.api.get(this.path + 'code/' + code);
  }
}
