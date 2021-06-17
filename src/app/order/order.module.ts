import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { OrderComponent } from './components/order/order.component';

import { OrderRoutingModule } from './order-routing.module';
import { MaterialModule } from "@meterial/material.module";
import { SharedModule } from "@shared/shared.module";

import { GroupPipe } from "./pipes/group/group.pipe";

@NgModule({
	declarations: [
		OrderComponent,
		GroupPipe
	],
	imports: [
		CommonModule,
		OrderRoutingModule,
		MaterialModule,
		SharedModule,
		ReactiveFormsModule
	]
})
export class OrderModule { }
