import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from '../../environments/environment';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BaseApiService {

  constructor(public client: HttpClient) {

  }

  public get<T>(url: string): Observable<T> {
    let requestUrl = this.getRequestUrl(url);
    return this.client.get<T>(requestUrl);
  }

  public post<T>(url: string, query_params : string[]): Observable<T> {
    let requestUrl = this.getRequestUrl(url);
    return this.client.post<T>(requestUrl, query_params);
  }

  public getUrlSearchParams(query_params : string[]): URLSearchParams {
    let params = new URLSearchParams();
    for (let key in query_params) {
      if (query_params[key] !== "") {
        params.set(key, query_params[key]);
      }
    }

    return params;
  }

  private getRequestUrl(url: string) : string {
    let requestUrl = environment.apiUrl + url;
    if (requestUrl.indexOf('?')>-1) {
      requestUrl += '&json=true';
    } else {
      requestUrl += '?json=true';
    }

    return requestUrl;
  }
}
