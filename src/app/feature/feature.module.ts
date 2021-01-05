import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { AngularFireAuthModule } from '@angular/fire/auth';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    AngularFireAuthModule
  ],
  exports: [
    HomeModule
  ]
})
export class FeatureModule { }
