import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { Router } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    public afAuth: AngularFireAuth,
    public router: Router,
    private snackBar: MatSnackBar
  ) {}

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  openSnackBar(message: string, action: string, route: string): void {
    const snack = this.snackBar.open(message, action, {
      duration: 5000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: ['mat-toolbar', 'mat-warn'],
    });

    // snack.afterDismissed().subscribe(() => {
    //   console.log('This will be shown after snackbar disappeared');
    // });
    snack.onAction().subscribe(() => {
      // console.log('This will be called when snackbar button clicked');
      this.router.navigate([route]);
    });
  }

  onLoginWithEmail(email: string, password: string): void {
    try {
      console.log('Email&password login...');
      this.afAuth
        .signInWithEmailAndPassword(email, password)
        .then((response) => {
          console.log(response);
          this.router.navigate(['/welcome']);
        })
        .catch((err) => {
          console.log(err);
          this.openSnackBar(
            'Error in login! Try other time or go to ',
            'Register',
            '/register'
          );
        });
    } catch (err) {
      return err;
    }
  }

  // Sign in with Facebook
  // Go to https://developers.facebook.com/docs/facebook-login/
  // Create App and asociate your account paste ID App + Secret App in Firebase and paste URI OAuth in Facebook App
  onLoginWithFacebook(): void {
    try {
      console.log('Try to loggin with Twitter...');
      this.loggin(new firebase.auth.FacebookAuthProvider());
    } catch (err) {
      return err;
    }
  }

  // Sign in with GitHub
  // Go to https://docs.github.com/en/free-pro-team@latest/developers/apps/building-oauth-apps
  // In your acount user go to Settings > Developers Settings > OAuth Apps > Register a new application
  // Create App and paste ID App + Generate a new client secret in Firebase and paste URI OAuth in GitHub App
  onLoginWithGitHub(): void {
    try {
      console.log('Try to loggin with GitHub...');
      this.loggin(new firebase.auth.GithubAuthProvider());
    } catch (err) {
      return err;
    }
  }

  // Sign in with Google
  // Go to https://console.developers.google.com/apis/credentials
  // And go to Crear credenciales > Id de cliente de OAuth
  // Credenciales > Clave de API o IDs de cliente de OAuth 2.0
  // And paste ID App in Firebase
  onLoginWithGoogle(): void {
    try {
      console.log('Try to loggin with Google...');
      this.loggin(new firebase.auth.GoogleAuthProvider());
    } catch (err) {
      return err;
    }
  }

  async loggin(app: any): Promise<any> {
    try {
      this.afAuth
        .signInWithPopup(app)
        .then((response) => {
          console.log(response);
          console.log('Login sucess');
          this.router.navigate(['/welcome']);
        })
        .catch((err) => {
          console.log(err);
          this.openSnackBar(
            'Error in login! Try other time or go to ',
            'Register',
            '/register'
          );
        });
    } catch (err) {
      return err;
    }
  }
}
