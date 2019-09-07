import { Component, Output, EventEmitter } from '@angular/core';
import {Location} from '@angular/common';
import { Router } from '@angular/router';
@Component({
    selector: 'back-button',
    templateUrl: './back.component.html',
    styleUrls: ['./back.component.css']
    
})
export class BackComponent {

  constructor(private _location: Location,private router:Router) { }
  @Output() backUpPage = new EventEmitter<string>();
  ngOnInit() {
  }

  clickBack() {
    this.router.navigate(['/products']);
    //this.backUpPage.emit('N');
  // this._location.back();
  }
  
 
}
