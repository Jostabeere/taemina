import { Component, Input, OnInit } from '@angular/core';
import { Skill } from '../../../models/Skill';
import { MagicType } from '../../../models/magic/MagicType';
import { MagicService } from '../../../service/MagicService';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatListModule } from '@angular/material/list';

import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.scss'],
  standalone: true,
  imports: [
    MatDividerModule,
    MatTooltipModule,
    MatListModule,
    MatIconModule
],
})
export class SkillCardComponent implements OnInit {
  @Input() skills!: Skill[];

  constructor() {}

  ngOnInit(): void {}

  getIcon(magic: MagicType): string {
    const icon = MagicService.getMagicIcon(magic);

    if (icon) {
      return icon;
    }
    return '';
  }
}
