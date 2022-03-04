import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SubjectToAdd } from 'app/models/Subject';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  //URLS
  urlLoadSubjectsList = environment.apiUrl + '/api/subejcts/loadSubjectsList';
  urlAddSubject = environment.apiUrl + '/api/subjects/addSubject'

  subjectsList$ = this.http.get(this.urlLoadSubjectsList);
  constructor(private http: HttpClient) { }


  addSubject(subject: SubjectToAdd) {
    return this.http.post(this.urlAddSubject, subject);
  }
  
}
