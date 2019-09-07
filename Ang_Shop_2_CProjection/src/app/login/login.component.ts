import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../services/user.service';
import { AdminService } from '../services/admin.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() logged = new EventEmitter<string>();
  constructor(private router:Router,private userService:UserService , private adminService:AdminService) {
    console.log("my users : ");
    console.log(this.userService.users);
   }

  ngOnInit() {
  }
  onSubmit(formData : NgForm) {
    console.log("submit works ! ");
    console.log(formData);
    console.log(formData.form.value);
    if (this.adminService.validateAdmin(formData.form.value.username,formData.form.value.password)) {
      console.log("admin validation ok");
      this.adminService.logInUser('admin');
      this.router.navigate(['']);
      

      this.logged.emit('admin');
    }
    else if (this.userService.validateUserAndPass(formData.form.value.username,formData.form.value.password)) {
      console.log("dateils of users valid");
      this.userService.logInUser('user');
      this.logged.emit('user');
      this.router.navigate(['']);
    }
    else {
      this.logged.emit('');
    }
  }
}
