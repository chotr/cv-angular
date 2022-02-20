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
    const navLink = document.querySelectorAll('nav-link');
    const active = document.getElementById('aboutMenu') as HTMLElement;
    const element = document.getElementById('navbar-client');

    if (scrollY > 50) {
      element?.classList.remove('onTop');
      element?.classList.add('outTop');
    }
    if (scrollY < 0.5) {
      element?.classList.remove('outTop');
      element?.classList.add('onTop');
    }
  }
}
