import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Output() pageSelected = new EventEmitter<string>();
  constructor() { }

  onSelect(event:string) {
    console.log("the click event is : ");
    console.log(event);
    this.pageSelected.emit(event);
  }
  ngOnInit() {
  }

}
