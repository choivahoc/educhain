import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataResponse } from 'src/app/models/data-response.model';
import { BaseApi } from 'src/app/services/base-api.class';
import { baseUrl } from 'src/app/services/base-url';

@Injectable({
    providedIn: 'root',
})
export class TeacherService extends BaseApi {

    constructor(httpClient: HttpClient, @Inject(baseUrl) private hostUrl: string) {
        super(httpClient);
    }

    getDepartment(): Observable<any> {

        return this.httpClient.get<any>(`${this.hostUrl}/departments`);
    
      }
      
    
      getStudentsByClass(className:string): Observable<any> {

        return this.httpClient.post<any>(`${this.hostUrl}/students_by_class`,{"class_name": className});
    
      }

      getStudentDetail(className:string, userId:string): Observable<any> {

        return this.httpClient.post<any>(`${this.hostUrl}/students_by_class`,{"class_name": className,  "user_id":userId});
    
      }
      getdiplomas(): Observable<any> {

        return this.httpClient.get<any>(`${this.hostUrl}/diplomas`);
    
      }

      updatePoints(userId:string,data:any): Observable<any> {

        return this.httpClient.put<any>(`${this.hostUrl}/diplomas/${userId}`,{
          transcript: data
        });
    
      }
  
}
