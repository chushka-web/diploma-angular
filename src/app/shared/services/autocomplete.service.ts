import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ScientistModel } from '@models/scientist';
import { PublishingHouseModel } from '@models/publishing-house';
import { UniversityDepartmentModel } from '@models/university-department';
import { AuthService } from '@services/auth.service';
import { UserModel } from '@models/user';

@Injectable({
  providedIn: 'root'
})
export class AutocompleteService {

  user: UserModel;
  myHeaders = new HttpHeaders().set('Authorization', 'Bearer ' + this.auth.user.accessToken);

  constructor(private auth: AuthService, private http: HttpClient) { }

  getScientist(): Observable<Array<ScientistModel>> {
    return this.http.get<Array<ScientistModel>>(`${environment.apiUrl}Scientist`, {headers: this.myHeaders});
  }

  getPublishingHouse(): Observable<Array<PublishingHouseModel>> {
    return this.http.get<Array<PublishingHouseModel>>(`${environment.apiUrl}PublishingHouse`, {headers: this.myHeaders});
  }

  getUniversityDepartment(): Observable<Array<UniversityDepartmentModel>> {
    return this.http.get<Array<UniversityDepartmentModel>>(`${environment.apiUrl}UniversityDepartment`, {headers: this.myHeaders});
  }
}
