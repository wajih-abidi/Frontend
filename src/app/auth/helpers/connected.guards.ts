import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class ConnectedGuard implements CanActivate {

  constructor(private _router: Router) {}

  // canActivate
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if(sessionStorage.getItem('user')!=null){
        this._router.navigate(['/home']);
        return false;
    }
    else{
        return true;
    }
  }
}
