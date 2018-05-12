import { ErrorHandler, Injectable, Injector} from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Injectable()
export class ErrorsHandler implements ErrorHandler {
    constructor(private injector: Injector){
        
    }
    handleError(error: Error | HttpErrorResponse) {   
        const notificationService = this.injector.get(ToastrService );
        const router = this.injector.get(Router);
        if (error instanceof HttpErrorResponse) {
           // Server or connection error happened
           if (!navigator.onLine) {
            // Handle offline error
            return notificationService.error('Error','No Internet Connection',)
          } else {
            debugger;
            // Handle Http Error (error.status === 403, 404...)
            if(error.status >= 400&& error.status <=500){
            router.navigate(['/login']);
            return notificationService.error('Error','Server Error',)
                
            }
            // return notificationService.notify(`${error.status} - ${error.message}`);
          }
        } else {
          // Handle Client Error (Angular Error, ReferenceError...)     
        }
       // Log the error anyway
       console.error('It happens: ', error);
     }

}