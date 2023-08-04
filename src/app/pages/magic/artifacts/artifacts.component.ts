import { Component, OnInit } from '@angular/core';
import { AvatarComponent } from 'src/app/components/avatar/avatar.component';
import { AvatarCardComponent } from 'src/app/components/cards/avatar-card/avatar-card.component';
import { CardComponent } from 'src/app/components/cards/card/card.component';
import { CardContainerComponent } from 'src/app/components/container/card-container/card-container.component';
import { PageContentHeaderComponent } from 'src/app/components/header/page-content-header/page-content-header.component';

@Component({
  selector: 'app-artifacts',
  templateUrl: './artifacts.component.html',
  styleUrls: ['./artifacts.component.scss'],
  standalone: true,
  imports: [
    AvatarComponent,
    CardComponent,
    PageContentHeaderComponent,
    CardContainerComponent,
  ],
})
export class ArtifactsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
