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
      'getActiveProduct'
    )[0] as HTMLElement;
    let content1 = document.getElementsByClassName(
      'content_product'
    )[0] as HTMLElement;
    let left = document.getElementsByClassName('line_left')[3] as HTMLElement;
    let right = document.getElementsByClassName('line_right')[3] as HTMLElement;
    let title = document.getElementsByClassName('title_text')[3] as HTMLElement;
    let product_list = document.getElementsByClassName(
      'product_list'
    )[0] as HTMLElement;
    let screenPosition = window.innerHeight;
    if (
      content.getBoundingClientRect().top < screenPosition &&
      content.getBoundingClientRect().top >= 0
    ) {
      left.classList.add('left');
      right.classList.add('right');
      title.classList.add('text');
      content1.style.opacity = '1';
      content1.style.animation = 'none';
      product_list.style.animation = 'fadeIn 2.5s';
    } else {
      left.classList.remove('left');
      right.classList.remove('right');
      title.classList.remove('text');
      content1.style.opacity = '0';
      content1.style.animation = 'fadeOut 1s';
      product_list.style.animation = 'none';
    }
  }
}
