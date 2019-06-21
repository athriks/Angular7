import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private _http: HttpClient ) { }

postDataToApi(user)
{
console.log("signup details",user);
console.log("signup service is called");
let response = this._http.post("http://localhost:3001/register",user)
response.subscribe((data)=>console.log(data));
}

}
