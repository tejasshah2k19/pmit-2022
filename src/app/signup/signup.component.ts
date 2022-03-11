import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  firstName:string = ""
  email:string = ""
  password:string= ""


  constructor(private sessionService:SessionService) { }

  ngOnInit(): void {
  }

   //data read --> ngModel -> two way binding 
   saveUser(){
    //
    let user = {"firstName":this.firstName,"email":this.email,"password":this.password}
    this.sessionService.signupApi(user).subscribe(resp=>{
      if(resp.status == -1){

      }else{
        
      }
    })

    

  }

  //read data 
  //call api -- node -->db --> save 


}
