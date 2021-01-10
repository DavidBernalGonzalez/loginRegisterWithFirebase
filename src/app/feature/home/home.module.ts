import { LogedComponent } from './home/loged/loged.component';
import { SharedModule } from './../../shared/shared.module';
import { MaterialModule } from './../../shared/material/material.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './home/register/register.component';
import { LoginComponent } from './home/login/login.component';
import { WelcomeComponent } from './home/welcome/welcome.component';

@NgModule({
  declarations: [HomeComponent, RegisterComponent, LoginComponent, WelcomeComponent, LogedComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
