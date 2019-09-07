import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/model/product';
import { CartService } from 'src/app/services/cart.service';
import { Router , ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() product:Product;
  @Output() cartSize = new EventEmitter<number>();
  @Output() clicked = new EventEmitter<boolean>();
  constructor(private router:Router,private activatedRoute:ActivatedRoute,private cartService:CartService) {
  }

  ngOnInit() {
  }

  removeFromCart(productToRemove) {
    this.cartService.removeFromCart(productToRemove);
    this.cartSize.emit(this.cartService.cart.length);
    this.clicked.emit(false);
  }
  navigate() {
    this.clicked.emit(false);
    this.router.navigate(['/cart']);
    //this.router.navigate(['../'], { relativeTo: this.activatedRoute });
  }
  Tclicked() {
    this.clicked.emit(true);
  }
}
