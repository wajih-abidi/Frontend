import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  urlSendMail = environment.apiUrl + '/api/students/sendMail';
  
  constructor(private http: HttpClient) { }
  ngOnInit() {
    
  }

  loadClassesToSelect()
  {
    
  }

  sendMail(mailToSend) {
    return this.http.post(this.urlSendMail, mailToSend).pipe(
      map(result => {
        console.log(result);
        return result;
      })
    );
  }
}
