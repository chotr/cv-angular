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
    let socials = document.getElementById('socials') as HTMLElement;
    if (introduce.getBoundingClientRect().top < screenPosition) {
      socials.classList.add('show')
      socials.classList.remove('hide')

    }
    if (introduce.getBoundingClientRect().top > screenPosition) {
      socials.classList.add('hide')
      socials.classList.remove('show')

    }
  }
}
