import { AuthService } from './../../../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  FormControl,
  NgForm,
  Validators,
} from '@angular/forms';

/* Error when invalid control is dirty or touched */
export class MyErrorStateMatcher implements MyErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    return !!(control && control.invalid && (control.dirty || control.touched));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  showPassword = true;

  icons = {
    facebook: {
      url: '../../../../assets/icons/facebook.png',
      defaultUrl: '../../../../assets/icons/facebook.png',
      hoverUrl: '../../../../assets/icons/facebook2.png'
    },
    twitter: {
      url: '../../../../assets/icons/twitter.png',
      defaultUrl: '../../../../assets/icons/twitter.png',
      hoverUrl: '../../../../assets/icons/twitter2.png'
    },
    github: {
      url: '../../../../assets/icons/github.png',
      defaultUrl: '../../../../assets/icons/github.png',
      hoverUrl: '../../../../assets/icons/github2.png'
    },
    google: {
      url: '../../../../assets/icons/google.png',
      defaultUrl: '../../../../assets/icons/google.png',
      hoverUrl: '../../../../assets/icons/google2.png'
    }
  };

  constructor(private formBuilder: FormBuilder, public authService: AuthService) {
    this.loginForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
          // Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  submitForm(): void {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;
      console.log(email);
      console.log(password);
      // !Send data to server
      console.log(this.authService.onLoginWithEmail(email, password));
    }
  }

  ngOnInit(): void {}
}
