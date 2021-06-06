import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { Router, ActivatedRoute, Params } from "@angular/router";

import { ProductsService } from "../../../core/services/products/products.service";

import { MyValidators } from "../../../utils/validators";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.sass']
})
export class ProductEditComponent implements OnInit {

  form: FormGroup | any;
  id = '';

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.productsService.getProduct(this.id)
        .subscribe(product => {
          this.form.patchValue(product);
        });
    });
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      price: [0, [Validators.required, MyValidators.isPriceValid]],
      image: [''],
      description: ['', Validators.required]
    });
  }

  saveProduct(event: Event): void {
    event.preventDefault();
    if (this.form.valid) {
      this.productsService.updateProduct(this.id, this.form.value)
        .subscribe(product => {
          this.router.navigate(['admin/products'])
        });
    }
    console.log(this.form.value);
  }

  get priceField() {
    return this.form.get('price');
  }
}
