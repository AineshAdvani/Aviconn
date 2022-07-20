import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'gold',
  templateUrl: './gold.component.html',
  styleUrls: ['./gold.component.css']
})
export class GoldComponent implements OnInit,OnChanges {

  constructor() {
    console.log("constructor-message");
   }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }


  ngOnInit() {
    console.log("innit - message");
  }


}
