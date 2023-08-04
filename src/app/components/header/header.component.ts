import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDrawerToggleResult } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output("toggleDrawer") toggleDrawer: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onMenuClick(): void {
    this.toggleDrawer.emit()
  }

}
