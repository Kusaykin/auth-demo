import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {AuthConfig, AuthHttp} from 'angular2-jwt';
import {authHttpServiceFactory} from '../app.module';

@Injectable()
export class OrderService {

  constructor(private http: Http,
              private authHttp: AuthHttp) {
  }

  getOrders() {
    // use authHttp (and modify providers in app.module)
    /*
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [ Http, RequestOptions ]
    }
    export function authHttpServiceFactory(http: Http, options: RequestOptions) {
    return new AuthHttp( new AuthConfig({}), http, options);}
    */
    return this.authHttp.get('/api/orders')
      .map(response => response.json());
    // Or use http
    /*let headers = new Headers();
    let token = localStorage.getItem('token');
    headers.append('Authorization', 'Bearer ' + token);

    let options = new RequestOptions({ headers: headers });
    console.log(options);


    return this.http.get('/api/orders', options)
      .map(response => response.json());*/
  }
}
