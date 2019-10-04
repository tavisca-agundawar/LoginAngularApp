import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../Models/User';
import { AuthenticateService } from '../Services/Authentication/authenticate.service';
import { LoginResponseModel } from '../Models/LoginResponseModel';
import { error } from 'util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authenticate:AuthenticateService) { }

  ngOnInit() {
  }

  user : User;
  loginResponse : boolean = false;
  hasErrors : boolean = false;
  receivedErrors : string [];

  getLoginResponse(formInput : NgForm){
    this.user = {Username:formInput.value.username, Password:formInput.value.password, UserType: formInput.value.userType};
    this.authenticate.getResult(this.user).subscribe(
      data =>{
        this.loginResponse = data;
        this.hasErrors = false;
        console.log(data);
        console.log(this.loginResponse);
      },
      errors=>{
        this.loginResponse = false;
        this.hasErrors = true;
        //window.alert("Invalid Id / Password!");
        this.receivedErrors = new Array(errors.error.length);
        for (let index = 0; index < errors.error.length; index++) {
          this.receivedErrors[index] = errors.error[index].errorMessage;
        }
      }
    );
  }

}
