import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataResponse } from '../models/data-response.model';
import { FileResponseModel } from '../models/file-response.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  apiUrl = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }
  uploadImage(image: File): Observable<DataResponse<FileResponseModel>> {
    const formData: any = new FormData();
    formData.append('files', image);

    return this.httpClient.post<DataResponse<any>>(`${this.apiUrl}/files/images`, formData);
  }

  uploadDiplomas(body: { data_image: any }) {
    return this.httpClient.post<DataResponse<any>>(`${this.apiUrl}/images/nft`, body);
  }


}
