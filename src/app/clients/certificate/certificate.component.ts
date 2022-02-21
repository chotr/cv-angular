import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.scss'],
})
export class CertificateComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @HostListener('window:scroll', []) onWindowScroll() {
    let content = document.getElementsByClassName(
      'fe_c_text'
    )[0] as HTMLElement;
    let contentbe = document.getElementsByClassName(
      'be_c_text'
    )[0] as HTMLElement;
    let screenPosition = window.innerHeight;
    if (content.getBoundingClientRect().top < screenPosition) {
      let left = document.getElementsByClassName('line_left')[2] as HTMLElement;
      let fe = document.getElementsByClassName('fe_c')[0] as HTMLElement;
      let be = document.getElementsByClassName('be_c')[0] as HTMLElement;
      let right = document.getElementsByClassName(
        'line_right'
      )[2] as HTMLElement;
      let title = document.getElementsByClassName(
        'title_text'
      )[2] as HTMLElement;

      left.classList.add('left');
      right.classList.add('right');
      title.classList.add('text');
      fe.style.animation = 'lineRight 1.4s';
      be.style.animation = 'lineLeft 1.4s';
    }
    if (contentbe.getBoundingClientRect().top < screenPosition) {
      for (let i = 0; i < 4; i++) {
        if (i !== 2) {
          (
            document.getElementsByClassName('nav-link')[i] as HTMLElement
          ).classList.remove('active');
        } else {
          (
            document.getElementsByClassName('nav-link')[i] as HTMLElement
          ).className = 'nav-link active';
        }
      }
    }
  }
}
