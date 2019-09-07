import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { ManagementComponent } from '../management/management.component';

@Injectable({
  providedIn: 'root'
})
export class FormGuardService implements CanDeactivate<ManagementComponent> {
  
  constructor() { }
  canDeactivate(component:ManagementComponent) {
    if (component.addProductForm.dirty) {
      return component.confirmForm();
    }
    return true;
  }
}
