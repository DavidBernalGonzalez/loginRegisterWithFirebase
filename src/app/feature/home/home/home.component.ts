import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        ],
      ],
      password: ['',
        [
          Validators.required,
          Validators.minLength(6)
        ],
      ],
    });
    console.log(this.loginForm);
  }

  submitForm(): void {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.valid) {
      // !Send data to server
      console.log(this.loginForm);
      this.loginForm.reset();
      // this.loginForm.get('email')?.errors?.
    }
  }

  ngOnInit(): void {}
}
