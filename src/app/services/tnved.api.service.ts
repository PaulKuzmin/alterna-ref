import { Injectable } from '@angular/core';
import {BaseApiService} from "./base.api.service";
import {TnvedModel} from "../models/tnved.model";
import {Observable} from "rxjs";
import {TncodeModel} from "../models/tncode.model";

@Injectable({
  providedIn: 'root'
})
export class TnvedApiService {
  readonly path = 'tnved/';

  constructor(public api: BaseApiService) { }

  getNode(id: string): Observable<TnvedModel> {
    return this.api.get<TnvedModel>(this.path + 'node/' + id);
  }

  getCode(code: string): Observable<TncodeModel> {
    return this.api.get<TncodeModel>(this.path + 'code/' + code);
  }
}
