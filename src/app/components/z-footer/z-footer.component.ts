import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-z-footer',
  templateUrl: './z-footer.component.html',
  styleUrls: ['./z-footer.component.scss']
})
export class ZFooterComponent implements OnInit {

  constructor() { }
  incrementer:number=0;

  ngOnInit(): void {
  }
  funCount(){
    this.incrementer++;
    document.getElementById("SpanCount")?.innerHTML!=this.incrementer.toString()!;
   }

}
