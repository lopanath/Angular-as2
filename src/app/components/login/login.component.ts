import { Component, inject, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { LoginService } from 'src/app/services/login.service';
import { User } from './model/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private serv:LoginService){}
  private serve:AuthService=inject(AuthService);
@ViewChild('studentForm')myStudentForm:NgForm;
      onSubmit(user:User)
      {
      if( (user.username===this.serv.name) && (user.password===this.serv.password))
      {
        alert("User succesfully Logged in");
      
        this.serve.login();
       
      }


      
      // else
      // {
      //   alert("Does not match. Try again!!");

      // }
    }
}
