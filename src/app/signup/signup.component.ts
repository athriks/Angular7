import { SignupService } from './../signup.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  UserName = " ";
  email = " ";
  password = "";
  role ="";

constructor(private service : SignupService) { }
 postDataToService()
{
const user = {
 UserName : this.UserName,
 email : this.email,
 password : this.password,
 role : this.role
  }
  this.service.postDataToApi(user);
}


  ngOnInit() {

  }

  register()
  {
  this.postDataToService();
  }

}
