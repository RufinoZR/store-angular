import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { MyValidators } from "@utils/validators";

import { AuthService } from "@core/services/auth/auth.service";

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.sass']
})
export class RegisterComponent {

	form: FormGroup;

	constructor(
		private formBuilder: FormBuilder,
		private router: Router,
		private authService: AuthService
	) {
		this.buildForm();
	}

	register(event: Event) {
		event.preventDefault();
		if (this.form.valid) {
			const value = this.form.value;
			this.authService.createUser(value.email, value.password)
				.then(() => {
					this.router.navigate(['/auth/login']).then();
				});
		}
	}

	private buildForm() {
		this.form = this.formBuilder.group({
			email: ['', [Validators.required]],
			password: ['', [Validators.required, MyValidators.validPassword]],
			confirmPassword: ['', [Validators.required]],
		}, {
			validators: MyValidators.matchPasswords // para las validaciones grupales se tiene que preguntar en el form con hasError
		});
	}
}
