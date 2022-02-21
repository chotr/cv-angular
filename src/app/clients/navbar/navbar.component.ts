import { DOCUMENT } from '@angular/common';
import {
  Component,
  HostListener,
  Inject,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';
// import { WINDOW } from "./services/window.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {}

  @HostListener('window:scroll', []) onWindowScroll(e: Event): void {
    let scrollY = this.document.documentElement.scrollTop;
    const screenPosition = window.innerHeight;
    const navLink = document.querySelectorAll('nav-link');
    const active = document.getElementById('aboutMenu') as HTMLElement;
    const element = document.getElementById('navbar-client');
    const info = document.getElementsByClassName('about')[0] as HTMLElement;
    const certificate = document.getElementsByClassName('certificate')[0] as HTMLElement;
    const product = document.getElementsByClassName('product')[0] as HTMLElement;
    let content = document.getElementsByClassName(
      'skills_list'
    )[0] as HTMLElement;

    if (scrollY > 50) {
      element?.classList.remove('onTop');
      element?.classList.add('outTop');
    }
    if (scrollY < 0.5) {
      element?.classList.remove('outTop');
      element?.classList.add('onTop');
    }

    // active about
    if (info.getBoundingClientRect().top < screenPosition && info.getBoundingClientRect().top >= 0) {
       this.resetAndGet(0);
    }

    //active skills
    if (content.getBoundingClientRect().top < screenPosition && content.getBoundingClientRect().top >= 0) {
      return this.resetAndGet(1);
    }

    //active certificate
    if (certificate.getBoundingClientRect().top < screenPosition && certificate.getBoundingClientRect().top >= 0) {
      return this.resetAndGet(2);
    }

    //active product
    if (product.getBoundingClientRect().top < screenPosition && product.getBoundingClientRect().top >= 0) {
      return this.resetAndGet(3);
    }
    console.log((document.getElementById('skillMenu') as HTMLElement).className)
  }

  resetAndGet(number: number) {
    // khai bao bien voi vi tri number
    const value = document.getElementsByClassName('nav-link')[
      number
    ] as HTMLElement;

    // gan lai the cho nhung the ko phai active
    for (let i = 0; i < 4; i++) {
      if (i !== number) {
        (
          document.getElementsByClassName('nav-link')[i] as HTMLElement
        ).classList.remove('active');
      }
    }
    // gan the co viewport thanh active
    if (value.className !== 'nav-link active') {
      return (
        document.getElementsByClassName('nav-link')[number] as HTMLElement
      ).classList.add('active');
    }
  }
}
