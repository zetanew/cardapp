import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  dizi:any=[];
  kadi:string="";
  constructor(private userService:UserService){}

  ngOnInit():void{
    this.dizi=["ali" , "veli" , "deli"];
    this.kadi=this.userService.username;
  }

}
