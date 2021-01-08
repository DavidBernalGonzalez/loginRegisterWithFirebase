import { Router } from '@angular/router';
import { AuthService } from './../../../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  showPassword = true;
  showPasswordRepeat = true;

  constructor(
    private formBuilder: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {
    this.registerForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
          // Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
      passwordConfirm: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          this.matchOtherValidator('password') // this function call the method matchOtherValidator
        ],
      ],
    });
  }

  // ! This function Validate if the input password its equals than passwordConfirm
  matchOtherValidator(otherControlName: string): any {
    let thisControl: FormControl;
    let otherControl: FormControl;

    return function matchOtherValidate(
      control: FormControl
    ): { matchOther: boolean } | null {
      if (!control.parent) {
        return null;
      }

      // Initializing the validator.
      if (!thisControl) {
        thisControl = control;
        otherControl = control.parent.get(otherControlName) as FormControl;
        if (!otherControl) {
          throw new Error(
            'matchOtherValidator(): other control is not found in parent group'
          );
        }
        otherControl.valueChanges.subscribe(() => {
          thisControl.updateValueAndValidity();
        });
      }

      if (!otherControl) {
        return null;
      }

      if (otherControl.value !== thisControl.value) {
        return {
          matchOther: true,
        };
      }

      return null;
    };
  }

  submitForm(): void {
    this.registerForm.markAllAsTouched();
    if (this.registerForm.valid) {
      const email = this.registerForm.get('email')?.value;
      const password = this.registerForm.get('password')?.value;

      // !Send data to server
      this.authService.onLoginWithEmail(email, password);
    }
  }

  ngOnInit(): void {}

  backToLogin(): void{
    this.router.navigate(['/login']);
  }
}
