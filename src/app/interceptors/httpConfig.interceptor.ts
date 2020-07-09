import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpResponse,
    HttpErrorResponse
  } from '@angular/common/http';
import { Observable, throwError, from } from 'rxjs';
import { map, catchError, tap, switchMap, finalize } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable()
  export class HttpConfigInterceptor implements HttpInterceptor {
    loaderToShow: any;
    constructor(
      public loadingController: LoadingController
      ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      if (request.url.indexOf('http') !== 0) {
        return next.handle(request);
      }

      return from(this.loadingController.create({
        message: 'Aguarde',
        spinner: 'dots'
      }))
        .pipe(
          tap((loading) => {
            return loading.present();
          }),
          switchMap((loading) => {
            return next.handle(request).pipe(
              finalize(() => {
                loading.dismiss();
              })
            );
          })
        );
    }

}
