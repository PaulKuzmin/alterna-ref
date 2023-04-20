import {Injectable} from '@angular/core';
import {BaseApiService} from "./base.api.service";
import {Observable} from "rxjs";
import {ContactModel} from '../models/contact.model';
import {BaseModel} from "../models/base.model";

@Injectable({
  providedIn: 'root'
})
export class ContactApiService {
  readonly path = 'contacts';

  constructor(public api: BaseApiService) {
  }

  get(): Observable<BaseModel<ContactModel[]>> {
    return this.api.get<BaseModel<ContactModel[]>>(this.path);
  }
}
