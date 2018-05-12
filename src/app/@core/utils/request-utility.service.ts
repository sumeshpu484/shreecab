
import { Injectable } from '@angular/core'
import { Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/throw';
import { Router } from '@angular/router';

@Injectable()
export class RequestUtilityService {
    
    setAuth(element:any){
    
    }
    public extractData(res: Response) {
        let body = res.json();
        return body || {};
    }
    public handleError(error: Response | any) {
        // logging infrastructure
        debugger;
        let errMsg: string;
        if (error instanceof Response) {
            
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        if(error.message===401){
            return Observable.throw(errMsg);
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}