import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../services/user.service';
import { CartService } from '../services/cart.service';
import { AdminService } from '../services/admin.service';
@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.css']
})
export class SubHeaderComponent implements OnInit {
  @Input() cartSize:number;
   user:string;
  @Output() cartClick = new EventEmitter<string>();
  cartnum:number = 0;
  logged:string = '';
  name:string = '';

  


  constructor(private adminService:AdminService,private userService:UserService , private cartService:CartService) {
   console.log("constructor user")
   if (this.userService.isLogged('user'))
      this.name = this.userService.getUserName();
   else if (this.adminService.isLogged('admin'))  
      this.name = this.adminService.getUserName();
   console.log(this.name);
   
   if (this.userService.isLogged) {
    this.logged = 'user';
   }
  }
  getCartLength():number {
    return this.cartnum = this.cartService.cart.length;
  }
  clickOnCart() {
    this.cartClick.emit('Cart');
    console.log("click on cart icon. cart items : "+this.cartnum);
  }  

  ngOnInit() {
  }

}
