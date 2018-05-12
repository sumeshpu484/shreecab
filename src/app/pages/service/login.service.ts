import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from '../../@core/data/config.service';
import { Observable } from 'rxjs/Observable';
import { RequestOptions, Jsonp } from '@angular/http';
import 'rxjs/add/operator/catch';
import { LoginModel } from '../model/login.model';
@Injectable()
export class LoginService {
  baseUrl = "";
  httpOptions: any;
  options: any;
  constructor(private http: HttpClient,
    private AIRISysConfigService: ConfigService) {
    this.baseUrl = AIRISysConfigService.getApiURI();
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  }
  Login(userInfo: LoginModel) {
    return this.http.post(this.baseUrl + 'users/dashboard/login', JSON.stringify(userInfo),this.httpOptions)
  }

}
