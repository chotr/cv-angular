import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  number = 60;
  width: number;
  constructor() {}

  ngOnInit(): void {
    this.width = window.innerWidth
    if(this.width <= 1199){
      this.number = 50
    }
    if(this.width <= 767.89){
      this.number = 40
    }
    if(this.width <= 570){
      this.number = 30
    }
  }
  numSequence(n: number): Array<number> {
    return Array(n);
  }

}
