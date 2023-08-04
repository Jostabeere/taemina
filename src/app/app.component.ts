import { Component, OnInit, ViewChild } from '@angular/core';
import {
  MatDrawer,
  MatDrawerContent,
  MatSidenavModule,
} from '@angular/material/sidenav';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import {
  BreakpointObserver,
  Breakpoints,
  LayoutModule,
} from '@angular/cdk/layout';

import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HeaderComponent } from './components/header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { ElementRef } from '@angular/core';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    HeaderComponent
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('drawer') drawer!: MatDrawer;
  @ViewChild('drawerContent') drawerContent!: MatDrawerContent;
  @ViewChild('content') contentRef!: ElementRef<HTMLDivElement>;

  isMobile: boolean = true;

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
    if (window.matchMedia('(pointer: coarse)').matches) {
      this.drawer.toggle();
    }
  }

  posts: any;

  ngOnInit() {}

  constructor(
    private router: Router,
    private breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .subscribe((result) => {
        this.isMobile = result.matches;
      });
  }

  ngAfterViewInit(): void {
    // Scroll to top after navigating to other page
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        setTimeout(() => {
          this.contentRef.nativeElement.scrollTop = 0;
        });
      });
  }
}
