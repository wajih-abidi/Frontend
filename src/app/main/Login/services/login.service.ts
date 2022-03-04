import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User, Role } from 'app/auth/models';
import { environment } from 'environments/environment';
import { ToastrService } from 'ngx-toastr';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
//public
public currentUser: Observable<User>;

//private
private currentUserSubject: BehaviorSubject<User>;

/**
 *
 * @param {HttpClient} _http
 * @param {ToastrService} _toastrService
 */
constructor(
  private _http: HttpClient, 
  private _toastrService: ToastrService,
  private _router: Router) {
  this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
  this.currentUser = this.currentUserSubject.asObservable();
}

// getter: currentUserValue
public get currentUserValue(): User {
  return this.currentUserSubject.value;
}

/**
 *  Confirms if user is admin
 */
get isAdmin() {
  return this.currentUser && this.currentUserSubject.value.role === Role.Admin;
}

/**
 *  Confirms if user is client
 */
get isClient() {
  return this.currentUser && this.currentUserSubject.value.role === Role.Client;
}

/**
 * User login
 *
 * @param email
 * @param password
 * @returns user
 */
login(email: string, password: string) {
  return this._http
    .post<any>(`${environment.apiUrl}/auth/login`, { email, password })
    .pipe(
      map(result => {
        // login successful if there's a jwt token in the response
        if (result && result.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          sessionStorage.setItem('user', JSON.stringify(result));
          sessionStorage.setItem('showWarning', "1");
          // Display welcome toast!
          setTimeout(() => {
            this._toastrService.success(
              result.lastName +' '+result.firstName,
              'Bienvenu',
              { toastClass: 'toast ngx-toastr', closeButton: true }
            );
          }, 1000);

          // notify
          this.currentUserSubject.next(result);
        }

        return result;
      })
    );
}

/**
 * User logout
 *
 */
logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
  sessionStorage.removeItem('user');
  // notify
  this.currentUserSubject.next(null);

  this._router.navigate(['/login']);
}
}