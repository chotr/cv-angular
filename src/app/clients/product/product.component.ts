import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @HostListener('window:scroll', []) onWindowScroll() {
    let content = document.getElementsByClassName(
      'product_list'
    )[0] as HTMLElement;
    let screenPosition = window.innerHeight;
    if (content.getBoundingClientRect().top < screenPosition) {
      let left = document.getElementsByClassName('line_left')[3] as HTMLElement;
      let right = document.getElementsByClassName(
        'line_right'
      )[3] as HTMLElement;
      let title = document.getElementsByClassName(
        'title_text'
      )[3] as HTMLElement;

      left.classList.add('left');
      right.classList.add('right');
      title.classList.add('text');
    }
  }
}
