import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
   title : string ="tittle buraya";

   ngOnInit(): void {
    this.setTitle();
  }
   setTitle():void{
    this.title="Yeni titlee";
   }
}
