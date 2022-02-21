import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @HostListener('window:scroll', []) onWindowScroll() {
    let content = document.getElementsByClassName(
      'getActiveSkills'
    )[0] as HTMLElement;
    let content1 = document.getElementsByClassName(
      'content_skills'
    )[0] as HTMLElement;
    let screenPosition = window.innerHeight;
    if (content.getBoundingClientRect().top < screenPosition) {
      let left = document.getElementsByClassName('line_left')[1] as HTMLElement;
      let right = document.getElementsByClassName(
        'line_right'
      )[1] as HTMLElement;
      let title = document.getElementsByClassName(
        'title_text'
      )[1] as HTMLElement;

      left.classList.add('left');
      right.classList.add('right');
      title.classList.add('text');
      content1.style.opacity = '1';

      for (let i = 0; i < 4; i++) {
        let num = 0.8 * 1 + i * 0.2;
        (
          document.getElementsByClassName('text_left')[i] as HTMLElement
        ).style.animation = 'lineLeft ' + num + 's';
      }

      for (let i = 0; i < 4; i++) {
        let num = 0.8 * 1 + i * 0.2;
        (
          document.getElementsByClassName('text_right')[i] as HTMLElement
        ).style.animation = 'lineRight ' + num + 's';
      }
    }
  }
}
