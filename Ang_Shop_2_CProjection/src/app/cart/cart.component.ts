import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../../model/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  @Output() cartSize = new EventEmitter<number>();
  click:boolean ;
  cart: Product[] = [];//all products in my cart
  constructor(private cartService:CartService) {
    this.cart = this.cartService.cart;
  }

  cartLength(event) {
    this.cartSize.emit(event);
  }
  getCartLength():number {
    return this.cart.length; 
  }
  ngOnInit() {
  }
  clicked(eve) {
    this.click = eve ;
    console.log("event is : ");
    console.log(eve);
  }

}
