import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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


  constructor(private sessionService:SessionService,private tsService:ToastrService,private router:Router) { }

  ngOnInit(): void {
  }

   //data read --> ngModel -> two way binding 
   saveUser(){
    //
    let user = {"firstName":this.firstName,"email":this.email,"password":this.password}
    this.sessionService.signupApi(user).subscribe(resp=>{
      if(resp.status == -1){
          //error 
          this.tsService.error(resp.msg,"",{timeOut:3000})
      }else{
        //success 
        //navigate to login 

        this.tsService.success(resp.msg,"",{timeOut:3000})
        this.router.navigateByUrl("/login")
     
      }
    })

    

  }

  //read data 
  //call api -- node -->db --> save 


}
