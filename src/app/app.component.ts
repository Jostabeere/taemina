import { ViewportScroller } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer, MatDrawerContent } from '@angular/material/sidenav';
import { Event, NavigationEnd, Router, Routes } from '@angular/router';
import { filter } from 'd3';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  @ViewChild('drawer') drawer!: MatDrawer;
  @ViewChild('drawerContent') drawerContent!: MatDrawerContent;

  /**
   * Open or close the side navigation.
   */
  toggleDrawer(): void {
    this.drawer.toggle();
  }

  /**
   * Function that is executed in the case of a click on an element of the sidenav.
   */
  protected onNavItemClick(): void {
    if (window.matchMedia("(pointer: coarse)").matches) {
      this.drawer.toggle();
    }
  }

  posts: any;

  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      this.scrollContentContainerToTop(event);
    });
  }

  constructor(
    private router: Router,
  ) { }

  /**
   * Scroll to the top of the container if a route change event is detected.
   * @param event the navigation event that is checked.
   */
  private scrollContentContainerToTop(event: Event): void {
    if (event instanceof NavigationEnd) {
      this.drawerContent.scrollTo({ top: 0 });
    }
  }
}
