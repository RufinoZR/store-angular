import { Injectable } from '@angular/core';
import { interval } from "rxjs";

import { EmployeeModel } from "@core/models/employee/employee.model";

@Injectable({
	providedIn: 'root'
})
export class GeneratorService {

	generate(labels: string[], numRange: [number, number], width: number): EmployeeModel[] {
		const result: EmployeeModel[] = [];
		for (let i = 0; i < width; i += 1) {
			result.push(this.generateNode(labels, numRange));
		}
		return result;
	}

	generateNumber(numRange: [number, number]) {
		const diff = numRange[1] - numRange[0];
		return numRange[0] + Math.floor(Math.random() * diff);
	}

	generateLabel(labels: string[]) {
		return labels[Math.floor(Math.random() * labels.length)];
	}

	private generateNode(labels: string[], numRange: [number, number]): EmployeeModel {
		return {
			label: this.generateLabel(labels),
			num: this.generateNumber(numRange)
		};
	}

	getData() {
		return interval(2000);
	}
}
