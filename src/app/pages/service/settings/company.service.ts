import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from '../../../@core/data/config.service';
import 'rxjs/add/operator/catch';

@Injectable()
export class CompanyService {

  httpOptions: { headers: HttpHeaders; };
  baseUrl: string;
  constructor(private http: HttpClient,
    private AIRISysConfigService: ConfigService) {
      this.baseUrl = AIRISysConfigService.getApiURI();
      this.httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };
     }
     getAllCompany(){
      let userID= localStorage.getItem('Id');
      let token= localStorage.getItem('Token')
      return this.http.get(this.baseUrl + 'company/getall/'+userID+'/'+token,this.httpOptions)
     }


}
