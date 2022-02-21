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
      'getActiveCertificate'
    )[0] as HTMLElement;
    let content1 = document.getElementsByClassName(
      'content_certificate'
    )[0] as HTMLElement;
    let screenPosition = window.innerHeight;
    let left = document.getElementsByClassName('line_left')[2] as HTMLElement;
      let fe = document.getElementsByClassName('fe_c')[0] as HTMLElement;
      let be = document.getElementsByClassName('be_c')[0] as HTMLElement;
      let right = document.getElementsByClassName(
        'line_right'
      )[2] as HTMLElement;
      let title = document.getElementsByClassName(
        'title_text'
      )[2] as HTMLElement;
    if (content.getBoundingClientRect().top < screenPosition && content.getBoundingClientRect().top >=0) {
      left.classList.add('left');
      right.classList.add('right');
      title.classList.add('text');
      fe.style.animation = 'lineRight 1.4s';
      be.style.animation = 'lineLeft 1.4s';
      content1.style.opacity = '1';
      content1.style.animation = 'none';
    }else{
      left.classList.remove('left');
      right.classList.remove('right');
      title.classList.remove('text');
      fe.style.animation = 'none';
      be.style.animation = 'none';
      content1.style.opacity = '0';
      content1.style.animation = 'fadeOut 1s';
    }
  }
}
