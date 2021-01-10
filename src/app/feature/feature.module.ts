import { MaterialModule } from './../shared/material/material.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { AngularFireAuthModule } from '@angular/fire/auth';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    AngularFireAuthModule,
    SharedModule
  ],
  exports: []
})
export class FeatureModule { }
