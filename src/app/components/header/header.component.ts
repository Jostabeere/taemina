import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [MatButton, MatToolbar, MatIcon],
})
export class HeaderComponent implements OnInit {
  @Output('toggleDrawer') toggleDrawer: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onMenuClick(): void {
    this.toggleDrawer.emit();
  }
}
