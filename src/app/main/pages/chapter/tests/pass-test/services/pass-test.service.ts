import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PassTestService {

  urlLoadTestToPass = environment.apiUrl + '/Test/detailstest/';

  urlSubmitTest = environment.apiUrl + '/Test/submittestttt/ok'

  constructor(private http: HttpClient) { }

  loadTestToPass(id) {
    return this.http.get<any>(this.urlLoadTestToPass + id);
  }

  submitTest(test) {
    return this.http.post<any>(this.urlSubmitTest, test);
  }
}
