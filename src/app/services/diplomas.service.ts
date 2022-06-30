import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataResponse } from 'src/app/models/data-response.model';
import { BaseApi } from 'src/app/services/base-api.class';
import { baseUrl } from 'src/app/services/base-url';

@Injectable({
    providedIn: 'root',
})
export class DiplomasService extends BaseApi {

    constructor(httpClient: HttpClient, @Inject(baseUrl) private hostUrl: string) {
        super(httpClient);
    }

    getPoint(id: number): Observable<any> {
        return this.httpClient.get<any>(`${this.hostUrl}/diplomas?diplomas_id=${id}`);

    }
}
