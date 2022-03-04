import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CoreLoadingScreenService } from '@core/services/loading-screen.service';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from './services/register.service';
import { User } from '../../models/User';

import { locale as fr } from './i18n/fr';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {

  public passwordTextType: boolean;
  public registerForm: FormGroup;
  public submitted = false;
  public selectedFonctions = null;
  public secteurActiviteList = [{ name: 'mécanique' }];

  @ViewChild('SweetAlertSuccess') modalDone;

  @ViewChild('SweetAlertHTML') SweetAlertHTML;

  public fonctionData = [
    'PDG - DG - Gérant',
    'Directeur Administratif / Financier',
    'Responsable Administratif / Financier',
    'Directeur des achats',
    'Responsable des achats',
    'Chargé des achats',
    'Assistant achats',
    'Directeur commercial',
    'Responsable commercial',
    'Ingénieur commercial',
    'Assistant commercial'
  ];

  public secteurActiviteData = [
    { secteur: 'Equipements' ,
      sousSecteurs:[
        'Composants'
      ]
    },
    { secteur: 'Précision' ,
      sousSecteurs:[
        'Instruments de mesures'
      ]
    },
    { secteur: 'Transformation' ,
      sousSecteurs:[
        'Outillage'
      ]
    }
  ];

  public sousSecteurData = [];


  public userImage = null;
  public societeImage = null;

  constructor(@Inject(DOCUMENT) private document: any,
    private _coreLoadingScreenService: CoreLoadingScreenService,
    private _formBuilder: FormBuilder,
    private router: Router,
    private _toastrService: ToastrService,
    private registerService: RegisterService,
    private _translateService: TranslateService,) {
    this._translateService.setTranslation('fr', fr.data,true);
  }

  ngOnInit(): void {
    this.registerForm = this._formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', Validators.email],
      password: ['', [Validators.required, Validators.minLength(8)]],
      cpassword: ['', [Validators.required]],
      telephone: ['', [Validators.required, Validators.minLength(8)]],
      portable: ['', [Validators.required, Validators.minLength(8)]],
      ville: ['', [Validators.required]],
      codePostale: ['', [Validators.required, Validators.minLength(4)]],
     // description: [''],
      raisonSocial: ['', [Validators.required]],
      siret: ['', [Validators.required]],
      formeJuridique: ['', [Validators.required]],
      chiffresAffaires: ['', [Validators.required]],
      effectifs: ['', [Validators.required]],
      adresseSiegeSocial: ['', [Validators.required]],
      codePostaleSiegeSocial: ['', [Validators.required, Validators.minLength(4)]],
      fonction: ['', Validators.required],
      secteurActivite: ['', Validators.required],
      sousSecteur: new FormControl({value: '', disabled: true}, Validators.required),
      descriptionSociete: ['']
    });
  }


  get f() {
    return this.registerForm.controls;
  }

  fileUploadHandler(type, event) {
    let validImageTypes = ['image/jpg', 'image/jpeg', 'image/png'];
    let typeFile = event.target.files[0].type;

    if (validImageTypes.includes(typeFile)) {
      if (event.target.files[0]) {
        if (type == 'user') {
          this.userImage = event.target.files[0];
        }
        else {
          this.societeImage = event.target.files[0];
        }
      }
    }
    else {
      //this.alertHandlerServ.alertHandler(this._translateService.instant("REGISTER.AlertImage"), 'error');
    }

  }

  changeSousSecteur(event){
     this.sousSecteurData = this.secteurActiviteData.find(x=>x.secteur==event).sousSecteurs;
    this.registerForm.get('sousSecteur').setValue(this.sousSecteurData[0]);
     

     if(this.sousSecteurData.length!=0){this.f.sousSecteur.enable();}
     else{this.f.sousSecteur.disable();}
  }

  //show/hide password content
  togglePasswordTextType() {
    this.passwordTextType = !this.passwordTextType;
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.registerForm)
    // stop here if form is invalid
    if (this.registerForm.invalid || this.registerForm.value.password != this.registerForm.value.cpassword) {
      //this.alertHandlerServ.alertHandler(this._translateService.instant("REGISTER.AlertForm"), 'error');
      return;
    }
    else {
      let user = new User();
      user.firstName = this.registerForm.value.firstName;
      user.lastName = this.registerForm.value.lastName;
      user.email = this.registerForm.value.email;
      user.pwd = this.registerForm.value.password;
     // user.description = this.registerForm.value.description;

      this.registerService.registerUser(JSON.stringify(user)).subscribe(
        (userId: any) => {

          if (this.userImage != null || this.societeImage != null) {
            const data: FormData = new FormData();
            data.append("user", userId.user);

            if (this.userImage != null) {
              data.append('userPic', this.userImage);
            }
            if (this.societeImage != null) {
              data.append('societePic', this.societeImage);
            }

            this.registerService.registerUserImages(data).subscribe(() => {
              this.showMoal();
            });
          }
          else {
            this.showMoal();
          }
        },
        error => {
          if (error.error == 'email taken') {
            //this.alertHandlerServ.alertHandler(this._translateService.instant("REGISTER.AlertEmail"), 'error');
          }
          else{
            //this.httpErrorServ.handleError(error);
          }
        }
      );
    }

  }

  showMoal() {
    this.SweetAlertHTML.fire();
    setTimeout(() => {
      this.SweetAlertHTML.dismiss();
      this.modalDone.fire().then(() => {
        this.modalDone.dismiss();
        setTimeout(() => {
          this.router.navigate(["/login"]);
        }, 500);

      });
    }, 4000);
  }

  maxLengthCheck(object) {
    object.value = object.value.replace(/\D/g, "");
    if (object.value.length > object.maxLength) {
      object.value = object.value.slice(0, object.maxLength)
    }
  }
}
