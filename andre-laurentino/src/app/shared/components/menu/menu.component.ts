import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  isMenuVisible = false;
  isMenuColored: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    this.isMenuColored = scrollTop > 50;
  }

  toggleMenu(): void {
    this.isMenuVisible = !this.isMenuVisible;
  }
}
