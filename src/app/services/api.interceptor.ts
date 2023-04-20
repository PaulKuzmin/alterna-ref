import {Injectable, Injector} from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {NavController} from "@ionic/angular";

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor(
    private http: HttpClient,
    private readonly injector: Injector,
    private navCtrl: NavController
  ) {
  }

  private handleError(error: HttpErrorResponse, req: HttpRequest<any>, next: HttpHandler): Observable<any> {

    const code = error.error.code || error.status
    const message = error.error?.message || error.message

    // TODO: Error handler
    console.log('==error==');
    console.log(code);
    console.log(message);

    /*
    if (code == 401) {
      this.navCtrl.navigateRoot(['/tabs']);
    }
     */
    throw error;
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        return this.handleError(error, request, next);
      }),
      // finalize(() => {
      //   setTimeout(() => {
      //     if (loading) loading.dismiss()
      //   }, 300)
      // })
    )
  }
}
