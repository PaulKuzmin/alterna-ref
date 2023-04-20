import { Injectable } from '@angular/core';
import {BaseApiService} from "./base.api.service";

@Injectable({
  providedIn: 'root'
})
export class ExamplesApiService {
  readonly path = 'widget/calculator/examples/';

  constructor(public api: BaseApiService) { }

  getList(text: string) {
    return this.api.get(this.path + text);
  }
}
