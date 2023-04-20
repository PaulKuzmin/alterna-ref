import { Injectable } from '@angular/core';
import {BaseApiService} from "./base.api.service";

@Injectable({
  providedIn: 'root'
})
export class ContactApiService {
  readonly path = 'widget/contacts';

  constructor(public api: BaseApiService) { }

  get() {
    return this.api.get(this.path);
  }
}
