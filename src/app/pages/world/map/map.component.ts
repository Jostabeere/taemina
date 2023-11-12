import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatLabel } from '@angular/material/form-field';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {

  result = "";

  @ViewChild('maptooltip', { static: false }) paragraph: ElementRef | undefined;
  @ViewChild('map') map: ElementRef | undefined;

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.addOnClickListeners();
    if (this.paragraph != null) {
      this.paragraph.nativeElement.style.display = "none";
    }
  }

  addOnClickListeners() {
    if (this.map != null) {
      const markTags = this.map.nativeElement.querySelectorAll('a');
      markTags.forEach((tag: HTMLElement) => {
        tag.addEventListener('click', (event) => {
          this.onMouseClick(event);
        });
      });
    }
  }

  setSelected(value: string) {
    this.result = value;
  }

  @HostListener('click', ['$event'])
  onMouseClick(e: any): void {
    if (this.paragraph != null) {
      const title: string = this.getTitle(e);
      if (title != null) {
        this.paragraph.nativeElement.style.display = "inline-block";
        this.paragraph.nativeElement.style.top = e.clientY - 75 + "px";
        this.paragraph.nativeElement.style.left = e.clientX - 100 + "px";
        this.setSelected(title);
      } else {
        this.paragraph.nativeElement.style.display = "none";
      }
    }
  }

  getTitle(e: any): string {
    //return e.target.parentNode.getAttribute("title");
    return e.target.closest('a').getAttribute("title");
  }
}
