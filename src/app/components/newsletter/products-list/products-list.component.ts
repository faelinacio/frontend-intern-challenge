import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Product} from '../../../models/product.model';
import {ProductService} from '../../../services/product.service';
import {take} from 'rxjs/operators';
import {ApiResponse} from '../../../models/apiResponse.model';
import {HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  form: FormGroup;
  products: Product[];
  page: number;

  constructor(
    private formBuider: FormBuilder,
    private productService: ProductService
  ) {
    this.page = 1;
    this.products = [];
  }

  ngOnInit() {
    this.createForm();
    this.listProducts();
  }

  private listProducts(): void {
    this.productService.listProducts(this.page)
      .pipe(take(1))
      .subscribe((apiResponse: HttpResponse<ApiResponse>) => {
        this.products.push(...apiResponse.body.products);
      });
  }

  share(): void {
    if (this.form.invalid) {
      return;
    }
    // Share function here
  }

  private createForm(): void {
    this.form = this.formBuider.group({
      friendsName: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]]
    });
  }

  formatPrice(price: number): string {
    return price.toFixed(2).replace('.', ',');
  }

  getMoreProducts() {
    this.page ++;
    this.listProducts();
  }

  buyProduct(product: Product) {
    // Buy function here
  }
}
