import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    
  ],
  imports: [
  CommonModule,
  BrowserModule,
  MaterialModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule
  ]
})
export class CriticalElementsModule {}
