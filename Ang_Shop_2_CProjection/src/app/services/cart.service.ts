import { Product } from '../../model/product';
import { Category } from '../../model/category';
import { User } from '../../model/user';

export class CartService {
  
       
       
    
    
    cart: Product[] = []; //this is my cart array
    user: User; // for future use

    //this function add product to cart list
    addToCart(productToAdd: Product) {
        this.cart.push(productToAdd);
        
    }
    getLastIdNumber():number {
        let id:number = 0 ;
        this.cart.forEach((elem) => {
            if (Number(elem.id) > id)
                id = Number(elem.id);
        });
        id ++;
        return id ;
    }
    //this function remove product fromcart  list
    removeFromCart(productToRemove) {
        if (this.existsInCart(productToRemove) > -1) {
            this.cart.splice(this.existsInCart(productToRemove), 1);
        }
    }
    existsInCart(product): number {
        const index = this.cart.indexOf(product);
        if (index > -1) {
            return index;
        }
        return -1;
    }

}