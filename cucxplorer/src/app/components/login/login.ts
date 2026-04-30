import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  standalone: false,
  styleUrls: ['./login.scss'],
})
export class LoginComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      remember: [false]
    });
  }

  submit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
  isForgotMode = false;

  toggleMode() {
    this.isForgotMode = !this.isForgotMode;
  }
}