import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

// import { ContactComponent } from './components/contact/contact.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ListComponent } from './components/list/list.component';

import { ContactRoutingModule } from './contact-routing.module';
import { MaterialModule } from "@meterial/material.module";
import { SharedModule } from "@shared/shared.module";

@NgModule({
	declarations: [
		LayoutComponent,
		ListComponent,
	],
	imports: [
		CommonModule,
		SharedModule,
		ContactRoutingModule,
		MaterialModule,
		FormsModule,
	]
})
export class ContactModule {}
