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

  constructor(private formBuilder: FormBuilder) {
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
    console.log(this.loginForm);
  }

  submitForm(): void {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.valid) {
      // !Send data to server
      console.log(this.loginForm);
      // this.loginForm.reset();
    }
  }

  ngOnInit(): void {}
}
