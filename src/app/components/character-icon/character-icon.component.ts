import { Component, Input, OnInit } from '@angular/core';
import { MagicType } from '../../models/magic/MagicType';
import { MagicService } from '../../service/MagicService';
import { Specialization } from '../../models/Specialization';
import { specializationData } from '../../data/SpecializationData';

import { MatTooltipModule, TooltipComponent } from '@angular/material/tooltip';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-character-icon',
  templateUrl: './character-icon.component.html',
  styleUrls: ['./character-icon.component.scss'],
  standalone: true,
  imports: [MatIcon, MatTooltipModule],
})
export class CharacterIconComponent implements OnInit {
  @Input() magicType!: MagicType;

  specialization: Specialization | undefined = specializationData[0];

  constructor() {}

  ngOnInit(): void {
    this.specialization = MagicService.getSpecializationByMagic(this.magicType);
  }
}
