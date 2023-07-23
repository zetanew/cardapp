import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  dizi:any=[];
  

  ngOnInit():void{
    this.dizi=["ali" , "veli" , "deli"];
  }

}
