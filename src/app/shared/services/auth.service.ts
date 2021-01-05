import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { Router } from '@angular/router';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(public afAuth: AngularFireAuth, public router: Router, private snackBar: MatSnackBar) {}

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  openSnackBar(message: string, action: string, route: string): void {
    const snack = this.snackBar.open(message, action, {
      duration: 5000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: ['mat-toolbar', 'mat-warn']
    });

    // snack.afterDismissed().subscribe(() => {
    //   console.log('This will be shown after snackbar disappeared');
    // });
    snack.onAction().subscribe(() => {
      // console.log('This will be called when snackbar button clicked');
      this.router.navigate([route]);
    });
  }

  async onLoginWithEmail(email: string, password: string): Promise<any> {
    try {
      console.log('Verificando user y password en firebase...');
      this.afAuth
        .signInWithEmailAndPassword(email, password)
        .then((response) => {
          console.log(response);
          this.router.navigate(['/welcome']);
        })
        .catch((err) => {
          console.log(err);
          this.openSnackBar('Error in login! Try other time or go to ', 'Register', '/register');
        });
    } catch (err) {
      return err;
    }
  }

    // Sign in with Facebook
    // Go to https://developers.facebook.com/docs/facebook-login/
    // Create App and asociate your account paste ID App + Secret App in Firebase and paste URI OAuth in Facebook App
  async onLoginWithFacebook(): Promise<any> {
    try {
      console.log('Verificando user y password en firebase...');
      this.afAuth
        .signInWithPopup(new firebase.auth.FacebookAuthProvider())
        .then((response) => {
          console.log(response);
          this.router.navigate(['/welcome']);
        })
        .catch((err) => {
          console.log(err);
          this.openSnackBar('Error in login! Try other time or go to ', 'Register', '/register');
        });
    } catch (err) {
      return err;
    }
  }
}
