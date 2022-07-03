import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiplomasComponent } from './diplomas.component';
import { ViewDiplomasComponent } from './view-diplomas/view-diplomas.component';
import { EditDiplomasComponent } from './edit-diplomas/edit-diplomas.component';
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from "@angular/common/http";

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}
@NgModule({
  imports: [
    CommonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    })
  ],

  exports: [DiplomasComponent],
  declarations: [DiplomasComponent, ViewDiplomasComponent, EditDiplomasComponent]
})
export class DiplomasModule {
}
