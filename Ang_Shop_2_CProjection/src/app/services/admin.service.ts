import { User } from '../../model/user';
import { v1 as uuid } from 'uuid';
import { Product } from '../../model/product';
import { Category } from '../../model/category';
import { DataService } from './data.service';

export class AdminService {
    
    admins:User[] = [
        {
        "username":"admin",
        "password":"admin",
        "logged":false
        }   
    ];
    serviceCategories: Category[];
    productsArr: Product[];
    
    constructor(private dataService:DataService) {
        this.serviceCategories = this.dataService.fullCategoryArr;
        this.productsArr = this.dataService.productsArr;
      }
  
     
    validateAdmin(username:string,password:string):boolean {
        let exists:boolean = false;
        this.admins.forEach((user) => {
            if (user.username === username && user.password === password) {
                console.log("admin validate");
               exists = true;
            }
        });
        return exists;
    }
    logInUser(username:string) {
        this.admins.forEach((user) => {  
            if (user.username === username) {
              user.logged = true;
            }
        });
    }
    logOutUser(username:string) {
        this.admins.forEach((user) => {
            if (user.username === username) {
              user.logged = false;
            }
        });
    }

    addProduct(categoryId:string,image:string,title:string,price:number,desc:string) {
        let prodToAdd:Product = {
            "id":uuid(),
            "categoryId":categoryId,
            "name":title,
            "img":image,
            "price":price,
            "description":desc
        };
        this.dataService.fullCategoryArr.forEach((cat) => {
            if (cat.id === categoryId) {
                cat.products.push(prodToAdd);
            }
        });
    }
    updateProduct(productId:string,image:string,title:string,price:number,desc:string) {
        this.dataService.fullCategoryArr.forEach((cat) => {
            cat.products.forEach((prod) => {
                if (prod.id === productId) {
                    prod.img = image;
                    prod.name = title;
                    prod.price = price;
                    prod.description = desc;
                }
            });
        });
    }
    checkLogged():string {
        if (this.admins[0].logged)
            return 'admin';
        return '';    
    }
    isLogged(username:string) {
        let logged:boolean;
        this.admins.forEach((admin) => {  
            if (admin.username === username) {
              logged = admin.logged;
            }
        });
        return logged;
    }
    getUserName():string { // hardcoded
        return this.admins[0].username;
    }
}