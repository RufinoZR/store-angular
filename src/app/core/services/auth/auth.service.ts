import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { HttpClient } from "@angular/common/http";
import { tap } from 'rxjs/operators';

import { TokenService } from "@core/services/token/token.service";

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	constructor(
		private afa: AngularFireAuth,
		private http: HttpClient,
		private tokenService: TokenService
	) { }

	createUser(email: string, password: string) {
		return this.afa.createUserWithEmailAndPassword(email, password);
	}

	login(email: string, password: string) {
		return this.afa.signInWithEmailAndPassword(email, password);
	}

	logout() {
		return this.afa.signOut();
	}

	hasUser() {
		return this.afa.authState;
	}

	loginRestApi(email: string, password: string) {
		return this.http.post('https://platzi-store.herokuapp.com/auth', {
			email,
			password
		})
			.pipe(
				tap((data: any) => {
					this.tokenService.saveToken(data.token)
				})
			);
	}
}
