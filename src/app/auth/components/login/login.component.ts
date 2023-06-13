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
    email: ['jdoe@example.com', [Validators.email, Validators.required]],
    password: ['', [Validators.required, Validators.minLength(10)]],
  });

  onSubmit(): void {
    console.log(this.form.value);
    if (this.form.valid) {
      this.authService.login(this.form.value);
    }
  }
}
