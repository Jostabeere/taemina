import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar-card',
  templateUrl: './avatar-card.component.html',
  styleUrls: ['./avatar-card.component.scss']
})
export class AvatarCardComponent implements OnInit {

  @Input() image: string | undefined;
  @Input() title: string | undefined = "";
  @Input() subtitle?: string | undefined;
  @Input() subtitles?: string[] | undefined;

  constructor() {
  }

  ngOnInit(): void {

  }

}
