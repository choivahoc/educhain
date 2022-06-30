import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiplomasComponent } from './diplomas.component';
import { ViewDiplomasComponent } from './view-diplomas/view-diplomas.component';
import { EditDiplomasComponent } from './edit-diplomas/edit-diplomas.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [DiplomasComponent],
  declarations: [DiplomasComponent, ViewDiplomasComponent, EditDiplomasComponent]
})
export class DiplomasModule { }
