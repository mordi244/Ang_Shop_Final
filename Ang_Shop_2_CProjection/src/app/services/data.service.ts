import { Category } from '../../model/category';
import { Product } from '../../model/product';
import * as data from '../data.json';
import { v1 as uuid } from 'uuid';
export class DataService {
    prodId:number = 0;
    strId:string = '';
    fullCategoryArr: Category[] = []; //full data about categoty - include products. 
    productsArr: Product[] = [];//all products
    categoriesNames: string[] = [];
    loadProductsCatsFile = () => {
      this.prodId = 0 ;
      this.categoriesNames = [];
      this.fullCategoryArr = [];
      this.productsArr = [];
        this.categoriesNames.push('All');
        data.categories.forEach((cat: Category) => { //loop over the categories
          cat.id = uuid(); //set id to category
          this.fullCategoryArr.push(cat); //add category ti categories array
          this.categoriesNames.push(cat.name); //add category name to categories name array (for combo box)
          cat.products.forEach((prod: Product) => { //loop over the products of category
            prod.id = uuid(); //set id to product
            this.prodId++;
            this.strId = this.prodId.toString();
            console.log("my str id : "+this.strId);
            prod.id = this.strId;
            prod.categoryId = cat.id; //set the foreign key of product's categoryId to id of category
            this.productsArr.push(prod); //add product to products array 
          });
        });
        console.log(this.productsArr);
      }
      getProduct(id:string):Product {
        console.log("id in the function : "+id);
        // console.log("arr length : "+this.productsArr.length);
        // console.log("in get product function");
        // console.log("id : "+id);
        // console.log("id length : "+id.length);
        let prod:Product;
        this.productsArr.forEach((p) => {
          //console.log("all id's length : "+p.id.length);
          if(p.id === id) {
            prod = p;
            console.log("match id !! ");
          }
        });
        return prod;  
      } 
}
