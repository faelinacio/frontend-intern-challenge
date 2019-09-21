import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsListComponent } from './products-list.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ToastrModule} from 'ngx-toastr';

describe('ProductsListComponent', () => {
  let component: ProductsListComponent;
  let fixture: ComponentFixture<ProductsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsListComponent ],
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule,
        ToastrModule.forRoot()
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Friend name input should be required', (() => {
    const nameInput = component.form.controls.friendsName;
    nameInput.setValue('');
    expect(nameInput.valid).toBeFalsy();
    let errors = nameInput.errors || {};
    expect(errors.required).toBeTruthy();
    nameInput.setValue('Name');
    expect(nameInput.valid).toBeTruthy();
    errors = nameInput.errors || {};
    expect(errors.required).toBeFalsy();
  }));

  it('E-mail input should be required', (() => {
    const emailInput = component.form.controls.email;
    emailInput.setValue('');
    expect(emailInput.valid).toBeFalsy();
    let errors = emailInput.errors || {};
    expect(errors.required).toBeTruthy();
    emailInput.setValue('Email');
    errors = emailInput.errors || {};
    expect(errors.required).toBeFalsy();
  }));

  it('E-mail input should be a valid e-mail', (() => {
    const emailInput = component.form.controls.email;
    emailInput.setValue('Email');
    expect(emailInput.valid).toBeFalsy();
    let errors = emailInput.errors || {};
    expect(errors.email).toBeTruthy();
    emailInput.setValue('Email@email.com');
    expect(emailInput.valid).toBeTruthy();
    errors = emailInput.errors || {};
    expect(errors.email).toBeFalsy();
  }));
});
