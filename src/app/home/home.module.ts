import  { NgModule } from "@angular/core";

import { BannerComponent } from "./components/banner/banner.component";
import { HomeComponent } from "./components/home/home.component";

import { HomeRoutingModule } from "./home-routing.module";

@NgModule({
	declarations: [
		HomeComponent,
		BannerComponent
	],
	imports: [
		HomeRoutingModule
	]
})
export  class HomeModule {}
