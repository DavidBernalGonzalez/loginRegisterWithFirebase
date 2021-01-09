import { AuthGuard } from './../shared/guards/auth.guard';
import { LogedComponent } from './../feature/home/home/loged/loged.component';
import { LoginComponent } from './../feature/home/home/login/login.component';
import { RegisterComponent } from './../feature/home/home/register/register.component';
import { WelcomeComponent } from './../feature/home/home/welcome/welcome.component';
import { HomeComponent } from './../feature/home/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'welcome', component: WelcomeComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: 'loged', component: LogedComponent, canActivate: [AuthGuard] },
      { path: '**', component: WelcomeComponent }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
