import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private httpClient:HttpClient) { 

  }
   

  //login 

  //signup 
  signupApi(user:any):Observable<any>{
    return this.httpClient.post("http://localhost:3000/signup",user)
  }
  //forgetpassword 

}
