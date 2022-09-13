import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  navState = false;

  constructor() {}

  ngOnInit(): void {
    window.addEventListener('resize', (e: UIEvent) => {
      const screen = e.target as Window;
      if (screen.innerWidth > 768) {
        this.navState = false;
      }
    });

    const mobileNav = document.querySelector('.mobile-nav');
    const toggler = document.querySelector('.toggle-nav');

    window.onclick = (event) => {
      if (
        event.target !== mobileNav &&
        event.target !== toggler &&
        event.target !== mobileNav?.childNodes[0]
      ) {
        this.navState = false;
        // console.log(event.target);
      }
    };
  }
}
