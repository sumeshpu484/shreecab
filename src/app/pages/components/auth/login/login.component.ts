import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { LoginService } from '../../../service/login.service';
import { LoginModel } from '../../../model/login.model';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private loginService: LoginService,private router: Router) {
  }

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.loginForm = new FormGroup({
      empid: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required
      ])
    });
  }
  onLogin() {
    let userInfo =<LoginModel>this.loginForm.value;
    this.loginService.Login(userInfo).subscribe((result:any) => {
      
      if(result.status=="SUCCESS"){
        localStorage.setItem('Id',result.responsepayload.userid);
        localStorage.setItem('Token',result.responsepayload.accessToken);
        this.router.navigate(['/dashboard']);
      }
      else{
        // do the else part
      }
    })
  }

}
