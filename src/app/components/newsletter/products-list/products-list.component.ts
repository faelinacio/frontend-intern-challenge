import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuider: FormBuilder
  ) {
  }

  ngOnInit() {
    this.createForm();
  }

  share() {
    if (this.form.invalid) {
      return;
    }
    // Share function here
  }

  private createForm() {
    this.form = this.formBuider.group({
      friendsName: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]]
    });
  }
}
