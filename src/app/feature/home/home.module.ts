import { RouterModule } from '@angular/router';
import { SharedModule } from './../../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './home/register/register.component';
import { LoginComponent } from './home/login/login.component';
import { WelcomeComponent } from './home/welcome/welcome.component';

@NgModule({
  declarations: [HomeComponent, RegisterComponent, LoginComponent, WelcomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
