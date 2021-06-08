import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireStorageModule } from "@angular/fire/storage";

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from "./shared/shared.module";
import { CoreModule } from "./core/core.module";

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from "../environments/environment";

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
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
