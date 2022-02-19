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
    let content = document.getElementsByClassName('title')[0] as HTMLElement;
    let introduce = document.getElementsByClassName(
      'introduce'
    )[0] as HTMLElement;
    let info = document.getElementsByClassName('info')[0] as HTMLElement;
    let screenPosition = window.innerHeight;
    if (content.getBoundingClientRect().top < screenPosition) {
      let left = document.getElementsByClassName('line_left')[0] as HTMLElement;
      let right = document.getElementsByClassName(
        'line_right'
      )[0] as HTMLElement;
      let title = document.getElementsByClassName(
        'title_text'
      )[0] as HTMLElement;

      left.classList.add('left');
      right.classList.add('right');
      title.classList.add('text');
    }
    if (introduce.getBoundingClientRect().top < screenPosition) {
      introduce.classList.add('text');
    }
    if (info.getBoundingClientRect().top < screenPosition) {
      let left = document.getElementsByClassName('img')[0] as HTMLElement;
      let left_absolute = document.getElementsByClassName(
        'img_absolute'
      )[0] as HTMLElement;
      let right = document.getElementsByClassName(
        'personal_info'
      )[0] as HTMLElement;
      left.classList.add('left');
      right.classList.add('right');
      left_absolute.classList.add('text');
    }
  }
  ngOnInit(): void {}
}
