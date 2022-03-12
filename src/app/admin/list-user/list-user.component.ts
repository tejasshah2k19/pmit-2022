import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  constructor( private userService:UserService,private tsService:ToastrService) { }
 
  users:Array<any> = [] 
 
  ngOnInit(): void {
    this.userService.getAllUserApi().subscribe(resp=>{
      console.log(resp);
      

      if(resp.status == -1){
        this.tsService.error(resp.msg,"",{timeOut:3000})
      }else{
        this.tsService.success(resp.msg,"",{timeOut:3000})
        this.users = resp.data  
      }
    })
  }


}
