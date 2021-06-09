import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { AuthService } from "@core/services/auth/auth.service";

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.sass']
})
export class LoginComponent {
	form: FormGroup | any;

	constructor(
		private formBuilder: FormBuilder,
		private router: Router,
		private authService: AuthService
	) {
		this.buildForm();
	}


	login(event: Event) {
		event.preventDefault();
		if (this.form.valid) {
			const value = this.form.value;
			this.authService.login(value.email, value.password)
				.then(() => {
					this.router.navigate(['admin'])
				});
		}
		console.log(this.form.value);
	}

	private buildForm() {
		this.form = this.formBuilder.group({
			email: ['', [Validators.required]],
			password: ['', [Validators.required]],
		});
	}

}
