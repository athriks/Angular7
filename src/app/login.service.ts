import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router:Router,private _http: HttpClient) { }


postDataToApi(user)
{
console.log("Login details",user);
console.log("Login service is called");
let response = this._http.post("http://localhost:3001/authenticate",user)
this.router.navigate(['/user'])
response.subscribe((data)=>console.log(data));


}

}
