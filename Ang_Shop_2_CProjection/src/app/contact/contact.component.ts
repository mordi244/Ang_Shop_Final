
import { NgForm } from '@angular/forms';
import { Component, TemplateRef, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {  Input } from '@angular/core';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  modalRef: BsModalRef;
  message: string = "clickMessage";
  constructor(private modalService: BsModalService) {}

  openModal(formData : NgForm ,  template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-dialog-centered'});
  }
 
  confirm(): void {
    this.message = 'Confirmed!';
    console.log(this.message);
    this.modalRef.hide();
  }
 
  decline(): void {
    this.message = 'Declined!';
    console.log(this.message);
    this.modalRef.hide();
  }


  ngOnInit() {
  }
  

}
