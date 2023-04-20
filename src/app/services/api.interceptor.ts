import {Injectable, Injector} from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import {finalize, Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {AlertController, LoadingController, NavController} from "@ionic/angular";

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  loadingIndicator: any;

  constructor(
    private http: HttpClient,
    private readonly injector: Injector,
    private navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController
  ) {
  }

  private handleError(error: HttpErrorResponse, req: HttpRequest<any>, next: HttpHandler): Observable<any> {

    // const code = error.error.code || error.status
    const message = error.error?.message || error.message

    this.alertCtrl.create({
      header: 'Ошибка',
      message: message,
      buttons: ['OK'],
    }).then(a => a.present());

    this.navCtrl.navigateRoot(['/tabs'])

    throw error;
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.loadingCtrl.create({
      message: 'Загрузка...',
      duration: 5000
    }).then((l) => {
      this.loadingIndicator = l;
      this.loadingIndicator.present();
    });

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        return this.handleError(error, request, next);
      }),
      finalize(() => {
        if (this.loadingIndicator != null) {
          this.loadingIndicator.dismiss();
        }
      })
    )
  }
}
