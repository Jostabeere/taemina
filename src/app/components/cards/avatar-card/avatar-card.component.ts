import { Component, Input, OnInit } from '@angular/core';
import { AvatarComponent } from '../../avatar/avatar.component';

import { MatCard } from '@angular/material/card';

@Component({
  selector: 'app-avatar-card',
  templateUrl: './avatar-card.component.html',
  styleUrls: ['./avatar-card.component.scss'],
  standalone: true,
  imports: [AvatarComponent, MatCard],
})
export class AvatarCardComponent implements OnInit {
  @Input() image: string | undefined;
  @Input() title: string | undefined = '';
  @Input() subtitle?: string | undefined;
  @Input() subtitles?: string[] | undefined;
  @Input() specialfont?: boolean;

  constructor() {}

  ngOnInit(): void {}
}
