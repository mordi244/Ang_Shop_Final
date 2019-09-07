import { Component, OnInit, Input, EventEmitter, Output, AfterContentChecked } from '@angular/core';
import { Product } from '../../../model/product';
import { trigger, style, transition, animate } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [
    trigger('addProduct', [
      transition(':enter', [
        style({ transform: 'scale(0.5)', opacity: 0 }),  // initial
        animate('1s cubic-bezier(.8, -0.6, 0.2, 1.5)', 
          style({ transform: 'scale(1)', opacity: 1 }))  // final
      ])
    ])
  ]
  
})

export class CardComponent implements OnInit,AfterContentChecked {
 
  @Input() product:Product;
  @Input() prodClicked:string;
  @Input() showProd:Product;
  @Output() prodToLoadDesc = new EventEmitter<Product>();
  prodRouteid:string;
  productsArr:Product[] = [];
  newProduct:Product;
  constructor(private route:ActivatedRoute , private dataService:DataService) {
    this.productsArr = this.dataService.productsArr;
  
  }

  

  /* emit data to parent component when clicking the product div (clickeble)*/
  clickDiv(produc) { 
    this.prodToLoadDesc.emit(produc);
  }
  ngOnInit() {
    // this.prodRouteid = this.route.snapshot.params['id'];
    // console.log("the id in the route : "+this.prodRouteid);
    // console.log("my product after getting it with id : ");
    // this.newProduct = this.dataService.getProduct(this.prodRouteid);
    // console.log(this.newProduct);
  }
  ngAfterContentChecked(): void {  

  }

}
