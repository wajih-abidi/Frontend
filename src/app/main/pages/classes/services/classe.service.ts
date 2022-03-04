import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Classe } from 'app/models/Classe';
import { SubjectToSelect } from 'app/models/Subject';
import { UserToSelect } from 'app/models/User';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClasseService {

  //URLS
  urlAddClasse = environment.apiUrl + '/classe/PostClasse';
  urlLoadSubjectsToSelect = environment.apiUrl + '/api/subjects/loadSubjectsToSelect';
  urlLoadProfessorsToSelect = environment.apiUrl + '/api/users/loadProfessorsToSelect';
  urlLoadStudentsToSelect = environment.apiUrl + '';

  urlLoadClasses = environment.apiUrl + '/Classe/getallClasses';
  subjectsToSelect$ = this.http.get<SubjectToSelect>(this.urlLoadSubjectsToSelect);
  professorsToSelect$ = this.http.get<UserToSelect>(this.urlLoadProfessorsToSelect);
  studentsToSelect$ = this.http.get<UserToSelect>(this.urlLoadStudentsToSelect);
  classes$ = this.http.get(this.urlLoadClasses);
  constructor(private http: HttpClient) { }


  addClasse(classe) {
    return this.http.post(this.urlAddClasse, classe);
  }

  
}
