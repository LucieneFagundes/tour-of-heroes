import { Component } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private formBuilder: UntypedFormBuilder,
    private authService: AuthService
  ) {}

  form = this.formBuilder.group({
    email: [
      { value: 'jdoe@example.com', disabled: true },
      [Validators.email, Validators.required],
    ],
    password: ['123456', [Validators.required, Validators.minLength(10)]],
  });

  onSubmit(): void {
    if (this.form.valid) {

      const email = this.form.value.email;
      const password = this.form.value.password;

      this.authService.login({email, password});
    }

  }
}
