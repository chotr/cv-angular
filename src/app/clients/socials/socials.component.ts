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
    if (introduce.getBoundingClientRect().top < screenPosition && introduce.getBoundingClientRect().top >= 0) {
      socials.style.opacity = '1'
      socials.style.animation = 'lineRight 0.5s'

    }else{
      socials.style.opacity = '0'
      socials.style.animation = 'lineLeft_s 0.5s'
    }
    // if (introduce.getBoundingClientRect().top > screenPosition) {
    //   socials.classList.add('hide_s')
    //   socials.classList.remove('show_s')

    // }
  }
}
