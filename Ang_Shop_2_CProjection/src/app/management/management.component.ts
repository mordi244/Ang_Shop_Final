import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminService } from '../services/admin.service';
import { Category } from 'src/model/category';
import { Product } from 'src/model/product';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {
  serviceCategories: Category[] = [];
  serviceProducts: Product[] = [];
  addProductForm: FormGroup;
  updateProductForm:FormGroup;
  manageMode: string = 'add';
  prodId:string;
  constructor(private adminService: AdminService , private dataService:DataService) {
    this.serviceCategories = this.dataService.fullCategoryArr;
    this.serviceProducts = this.dataService.productsArr;
    console.log("in management constructor , cat data : ");
    console.log(this.serviceCategories);
  }

  ngOnInit() {
    this.initAddForm();
  }

  initUpdateForm(prodId) {
    let product:Product;
    this.serviceProducts.forEach((prod) => {
      if (prod.id === prodId) 
        product = prod;
    });
    if (product !== null) {
      console.log("*** in prod != null");
      console.log(product);
      this.addProductForm = new FormGroup({
        'product' : new FormControl(null , Validators.required),
        'category': new FormControl(null, Validators.required),
        'title': new FormControl(product.name, Validators.required),
        'image': new FormControl(product.img, Validators.required),
        'price': new FormControl(product.price, [Validators.required, Validators.min(0.1)]),
        'desc': new FormControl(product.description)
      });

    }
  }

  initAddForm() {
    this.addProductForm = new FormGroup({
      'product' : new FormControl(null , Validators.required),
      'category': new FormControl(null, Validators.required),
      'title': new FormControl(null, Validators.required),
      'image': new FormControl(null, Validators.required),
      'price': new FormControl(null, [Validators.required, Validators.min(0.1)]),
      'desc': new FormControl(null)
    });
  }
  onSubmit() {
    console.log("** log **");
    console.log("event : ");
    console.log(event);
    console.log(this.addProductForm);
    console.log(this.addProductForm.value);
    if (this.manageMode === 'add') {
    this.adminService.addProduct(this.addProductForm.value.category, this.addProductForm.value.image,
      this.addProductForm.value.title, this.addProductForm.value.price, this.addProductForm.value.desc);
    }
    else if (this.manageMode === 'update') {
      this.adminService.updateProduct(this.prodId,this.addProductForm.value.image,
        this.addProductForm.value.title,this.addProductForm.value.price,this.addProductForm.value.desc);
    }
  }
  revert() {
    this.addProductForm.reset({
    });
  }
  prodClicked(prod) {
    console.log("** click on product : ");
    console.log(prod);
    this.prodId = prod.target.value;
    this.initUpdateForm(prod.target.value);

  }
  changeMode(mode) {
    this.manageMode = mode;
  }
  confirmForm() {
    return confirm('Leave Form ?');
  }
}
