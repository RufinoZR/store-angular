import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireStorageModule } from "@angular/fire/storage";
import * as Sentry from '@sentry/browser';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from "@shared/shared.module";
import { CoreModule } from "@core/core.module";

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from "../environments/environment";

import { AuthInterceptor } from "./auth.interceptor";

// se enviaran errores cuando
if (environment.production) {
	Sentry.init({
		dsn: "https://314c5d3fee41456d87624aa01eab7f66@o820189.ingest.sentry.io/5809002",
		// integrations: [
		// 	new Integrations.BrowserTracing({
		// 		tracingOrigins: ["localhost", "https://yourserver.io/api"],
		// 		routingInstrumentation: Sentry.routingInstrumentation,
		// 	}),
		// ],
		//
		// // Set tracesSampleRate to 1.0 to capture 100%
		// // of transactions for performance monitoring.
		// // We recommend adjusting this value in production
		// tracesSampleRate: 1.0,
	});
}

@NgModule({
	declarations: [
		AppComponent,
		LayoutComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		SharedModule,
		CoreModule,
		BrowserAnimationsModule,
		HttpClientModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFireAuthModule,
		AngularFireStorageModule
	],
	providers: [{
		provide: HTTP_INTERCEPTORS,
		useClass: AuthInterceptor,
		multi: true
	}],
	bootstrap: [AppComponent]
})
export class AppModule { }
