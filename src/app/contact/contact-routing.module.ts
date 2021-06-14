import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import {LayoutComponent} from "./components/layout/layout.component";

// import { ContactComponent } from "./components/contact/contact.component";


const routes: Routes = [
	{
		path: '',
		component: LayoutComponent
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	exports: [
		RouterModule
	]
})
export class ContactRoutingModule {}
