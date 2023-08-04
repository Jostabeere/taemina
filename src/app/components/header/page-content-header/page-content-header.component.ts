import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-page-content-header',
  templateUrl: './page-content-header.component.html',
  styleUrls: ['./page-content-header.component.scss']
})
export class PageContentHeaderComponent implements OnInit {

  @Input() showBackButton: boolean = true;

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  onBackButton(): void {
    this.location.back()
  }
}
