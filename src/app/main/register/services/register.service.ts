import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  registerUser(user) {
    const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    return this.http.post(`${environment.apiUrl}/api/auth/register`, user, config);
  }

  registerUserImages(formData) {
    return this.http.post(`${environment.apiUrl}/api/files/uploadAllUserPics`, formData, { responseType: 'text' });
  }
}
