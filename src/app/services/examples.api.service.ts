import { Injectable } from '@angular/core';
import {BaseApiService} from "./base.api.service";
import {BaseModel} from "../models/base.model";
import {ExampleModel} from "../models/example.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ExamplesApiService {
  readonly path = 'calculator/examples/';

  constructor(public api: BaseApiService) { }

  getList(text: string): Observable<BaseModel<ExampleModel>> {
    return this.api.get<BaseModel<ExampleModel>>(this.path + text);
  }
}
