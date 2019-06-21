import { LoginService } from './../login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  UserName ="";
  password = "";
  role :string="user";
  // path :string = "./assets/athri.jpg"
  name :string ="athri"


  constructor(private router: Router ,private service : LoginService) {

   }

  login(){

    this.postDataToService();

  }
// easy acccess


postDataToService()
{
const user = {
 UserName : this.UserName,
 password : this.password,
 role : this.role
  }
  this.service.postDataToApi(user);


}

ngOnInit() {

}

}




