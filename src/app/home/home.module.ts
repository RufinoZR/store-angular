import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { BannerComponent } from "./components/banner/banner.component";
import { HomeComponent } from "./components/home/home.component";

import { HomeRoutingModule } from "./home-routing.module";
import { SearchComponent } from './components/search/search.component';
import {CommonModule} from "@angular/common";

@NgModule({
	declarations: [
		HomeComponent,
		BannerComponent,
		SearchComponent
	],
	imports: [
		HomeRoutingModule,
		ReactiveFormsModule,
		CommonModule,
	]
})
export  class HomeModule {}
