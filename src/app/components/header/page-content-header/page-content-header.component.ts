import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { MatDivider } from '@angular/material/divider';
import { MatFabButton } from '@angular/material/button';

@Component({
  selector: 'app-page-content-header',
  templateUrl: './page-content-header.component.html',
  styleUrls: ['./page-content-header.component.scss'],
  standalone: true,
  imports: [MatIcon, MatDivider],
})
export class PageContentHeaderComponent implements OnInit {
  @Input() showBackButton: boolean = true;

  constructor(private location: Location) {}

  ngOnInit(): void {}

  onBackButton(): void {
    this.location.back();
  }
}
