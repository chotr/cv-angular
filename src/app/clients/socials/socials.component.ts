import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.scss'],
})
export class SocialsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @HostListener('window:scroll', []) onWindowScroll() {
    let introduce = document.getElementsByClassName(
      'skills'
    )[0] as HTMLElement;
    let screenPosition = window.innerHeight;
    let socials = document.getElementsByClassName('list_s')[0] as HTMLElement;
    if (introduce.getBoundingClientRect().top < screenPosition) {
      socials.classList.add('show_s')
      socials.classList.remove('hide_s')

    }
    if (introduce.getBoundingClientRect().top > screenPosition) {
      socials.classList.add('hide_s')
      socials.classList.remove('show_s')

    }
  }
}
