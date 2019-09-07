import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Category } from 'src/model/category';
import { Product } from 'src/model/product';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  @Input() showProd:Product;
  @Output() editClick = new EventEmitter<boolean>();
  serviceCategories: Category[] = [];
  serviceProducts: Product[] = [];
  updateProductForm: FormGroup;
  prodId:string;
  constructor(private adminService: AdminService) {
    this.serviceCategories = this.adminService.serviceCategories;
    this.serviceProducts = this.adminService.productsArr;
    console.log("in management constructor , cat data : ");
    console.log(this.serviceCategories);
  }

  ngOnInit() {
    console.log("show product details from input : ");
    console.log(this.showProd);
    this.initAddForm();
  }



  initAddForm() {
    this.updateProductForm = new FormGroup({
      'title': new FormControl(this.showProd.name, Validators.required),
      'image': new FormControl(this.showProd.img, Validators.required),
      'price': new FormControl(this.showProd.price, [Validators.required, Validators.min(0.1)]),
      'desc': new FormControl(this.showProd.description)
    });
  }
  onSubmit() {
    console.log("** log **");
    console.log("event : ");
    console.log(event);
    console.log(this.updateProductForm);
    console.log(this.updateProductForm.value);
    this.adminService.updateProduct(this.showProd.id,this.updateProductForm.value.image,
    this.updateProductForm.value.title,this.updateProductForm.value.price,this.updateProductForm.value.desc);
    this.editClick.emit(false);
    
  }
  revert() {
    this.updateProductForm.reset({
    });
  }

  

}
