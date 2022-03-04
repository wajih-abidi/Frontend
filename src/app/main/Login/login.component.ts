import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CoreLoadingScreenService } from '@core/services/loading-screen.service';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from './services/login.service';

import { locale as fr } from './i18n/fr';
import { TranslateService } from '@ngx-translate/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 //  Public
 public coreConfig: any;
 public loginForm: FormGroup;
 public loading = false;
 public submitted = false;
 public error = '';
 public passwordTextType: boolean;

 public mailError = false;
 public passwordError = false;
  constructor( 
    @Inject(DOCUMENT) private document: any, 
    private _coreLoadingScreenService: CoreLoadingScreenService,
    private _formBuilder: FormBuilder,
    private _router: Router,
    private loginService: LoginService,
    private _toastrService: ToastrService,
    private _translateService: TranslateService,
    private modalService: NgbModal) 
    {
        this._translateService.setTranslation('fr',fr.data,true);
     }

    ngOnInit(): void {
      this.loginForm = this._formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        rememberMe: ['']
      });
    }

   // convenience getter for easy access to form fields
   get f() {
    return this.loginForm.controls;
  }

  /**
   * Toggle password
   */
  togglePasswordTextType() {
    this.passwordTextType = !this.passwordTextType;
  }

  onSubmit() {
    this.submitted = true;
    this.mailError = false;
    this.passwordError = false;
   
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    this.loginService.login(this.loginForm.value.email,this.loginForm.value.password).subscribe(
      (result)=>{
        console.log(result);
        if(this.loginForm.value.rememberMe){
          localStorage.setItem('user', JSON.stringify(result));
          console.log(localStorage.getItem('user'));
        }
        this.loading = false;
        this.ConfirmLogin();
      },
      (err)=>{
        if(err.error=='email'){
          // this.alertHandlerServ.alertHandler(this._translateService.instant("LOGIN.AlertMail"),'error');
          // this.mailError=true;
        }
        else if(err.error=='password'){
          // this.alertHandlerServ.alertHandler(this._translateService.instant("LOGIN.AlertPass"),'error');
          // this.passwordError=true;
        }
        else{
          //this.httpErrorServ.handleError(err);
        }
        this.loading = false;
      }
      );
  }



  ConfirmLogin(){
    // Login
    // redirect to home page (showWarning is used to check if you need to show the duration warning or not)
    setTimeout(() => {
      this._router.navigate(['/home']);
    }, 100);
  }

}
