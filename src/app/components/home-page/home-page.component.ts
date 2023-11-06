import { Component, OnInit } from '@angular/core';
import { ChangeService } from 'src/app/services/change.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  constructor(private servicedata:ChangeService) { }
  ngOnInit(): void {
  }


storeMSG:string="";
showMsg:string=""; 
storeMSG2:string="";
showMsg2:string=""; 

changefun(prechanging:any,AFchange:any){
  AFchange.value="";
  this.storeMSG="";
this.showMsg=prechanging.value;
  for ( let i of this.showMsg) {
    this.storeMSG +=this.servicedata.from_ENG_to_ARB(i);
    }
  AFchange.value=this.storeMSG;
}

changefun2(prechanging:any,AFchange:any){
  AFchange.value="";
  this.storeMSG2="";
this.showMsg2=prechanging.value;
  for ( let i of this.showMsg2) {
    this.storeMSG2 +=this.servicedata.from_ARB_to_ENG(i);
    console.log(i );
    }
  AFchange.value=this.storeMSG2;
}

Clear_Texts(prechanging:any,AFchange:any){
prechanging.value="";
AFchange.value="";
this.storeMSG="";
this.storeMSG2="";
}


}
