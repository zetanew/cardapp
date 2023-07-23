import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  constructor(private userService:UserService){
  }
  usersState:any=[];
  today=Date.now();
  ngOnInit():void{
  this.getusers();
  }
  getusers(){
    this.userService.getUsers()
    .subscribe((res:any) =>{
      console.log(res);
      this.usersState=res;
    })
  }

}
