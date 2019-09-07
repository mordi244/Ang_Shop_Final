import { Component, OnInit, ContentChild, ElementRef, AfterContentInit, ContentChildren, QueryList } from '@angular/core';
import { SocialComponent } from '../social/social.component';

@Component({
  selector: 'app-social-container',
  templateUrl: './social-container.component.html',
  styleUrls: ['./social-container.component.css']
})
export class SocialContainerComponent implements OnInit,AfterContentInit {
  
 // @ContentChild('facebook',{static:true}) fb:ElementRef;
  @ContentChildren('link') links:QueryList<ElementRef>; 
  constructor() { }

  ngOnInit() {
  }
  /* add target to anchor */
  ngAfterContentInit() {
    this.links.forEach((link) => {
     link.nativeElement.target = '_blank';
    });
  }

  addTargetsToLinks() {
   
  }
}
