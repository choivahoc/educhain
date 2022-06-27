import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataResponse } from 'src/app/models/data-response.model';
import { BaseApi } from 'src/app/services/base-api.class';
import { baseUrl } from 'src/app/services/base-url';

@Injectable({
    providedIn: 'root',
})
export class AdminService extends BaseApi {

    constructor(httpClient: HttpClient, @Inject(baseUrl) private hostUrl: string) {
        super(httpClient);
    }

    getDepartment(): Observable<any> {
        return this.httpClient.get<any>(`${this.hostUrl}/departments`);

    }

    getMajors(id: number): Observable<any> {
        return this.httpClient.get<any>(`${this.hostUrl}/majors?department_id=${id}`);

    }
}
