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
    // let content = document.getElementsByClassName('title')[0] as HTMLElement;
    const introduce = document.getElementsByClassName(
      'introduce'
    )[0] as HTMLElement;
    const info = document.getElementsByClassName('info')[0] as HTMLElement;
    const getAcitve = document.getElementsByClassName(
      'getActive'
    )[0] as HTMLElement;
    const screenPosition = window.innerHeight;
    if (introduce.getBoundingClientRect().top < screenPosition) {
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
      introduce.classList.add('text');
    }
    if (info.getBoundingClientRect().top < screenPosition) {
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
    }
    if (getAcitve.getBoundingClientRect().top < screenPosition) {
      const navLink = document.querySelectorAll('nav-link');
      const active = document.getElementById('aboutMenu') as HTMLElement;
      // reset nav link
      for (let i = 0; i < navLink.length; i) {
        navLink[i].className = 'nav-link';
      }
      active.classList.add('active');
    }
  }
  ngOnInit(): void {}
}
