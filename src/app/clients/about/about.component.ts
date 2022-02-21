import {
  AfterContentInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit, AfterContentInit {
  constructor() {}
  ngAfterContentInit(): void {}
  @HostListener('window:scroll', []) onWindowScroll() {
    let content = document.getElementsByClassName(
      'content_about'
    )[0] as HTMLElement;
    const introduce = document.getElementsByClassName(
      'introduce'
    )[0] as HTMLElement;
    const getActive = document.getElementsByClassName(
      'getActive'
    )[0] as HTMLElement;
    const table = document.getElementsByClassName(
      'table_about'
    )[0] as HTMLElement;
    const screenPosition = window.innerHeight;
    let left = document.getElementsByClassName('line_left')[0] as HTMLElement;
    let right = document.getElementsByClassName('line_right')[0] as HTMLElement;
    let title = document.getElementsByClassName('title_text')[0] as HTMLElement;

    if (
      getActive.getBoundingClientRect().top < screenPosition &&
      getActive.getBoundingClientRect().top >= 0
    ) {
      left.classList.add('left');
      right.classList.add('right');
      title.classList.add('text');
      introduce.classList.add('text');
      content.style.opacity = '1';
      content.style.animation = 'none';
    } else {
      left.classList.remove('left');
      right.classList.remove('right');
      title.classList.remove('text');
      introduce.classList.remove('text');
      content.style.opacity = '0';
      content.style.animation = 'fadeOut 1s';
    }
    if (
      getActive.getBoundingClientRect().top < screenPosition &&
      getActive.getBoundingClientRect().top >= 0
    ) {
      const left = document.getElementsByClassName('img')[0] as HTMLElement;
      const left_absolute = document.getElementsByClassName(
        'img_absolute'
      )[0] as HTMLElement;
      const right = document.getElementsByClassName(
        'personal_info'
      )[0] as HTMLElement;
      left.classList.add('left');
      right.classList.add('right');
      left_absolute.classList.add('text');
    } else {
      const left = document.getElementsByClassName('img')[0] as HTMLElement;
      const left_absolute = document.getElementsByClassName(
        'img_absolute'
      )[0] as HTMLElement;
      const right = document.getElementsByClassName(
        'personal_info'
      )[0] as HTMLElement;
      left.classList.remove('left');
      right.classList.remove('right');
      left_absolute.classList.remove('text');
    }
  }
  ngOnInit(): void {}
}

// const left = document.getElementsByClassName('img')[0] as HTMLElement;
// const left_absolute = document.getElementsByClassName(
//   'img_absolute'
// )[0] as HTMLElement;
// const right = document.getElementsByClassName(
//   'personal_info'
// )[0] as HTMLElement;
// left.classList.remove('left');
// right.classList.remove('right');
// left_absolute.classList.remove('text');
