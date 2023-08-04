import { Component, Input, OnInit } from '@angular/core';
import { Specialization } from 'src/app/models/Specialization';
import { Character } from '../../../models/character/Character';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { SpecializationIconComponent } from '../../specialization-icon/specialization-icon.component';


@Component({
  selector: 'app-personality-card',
  templateUrl: './personality-card.component.html',
  styleUrls: ['./personality-card.component.scss'],
  standalone: true,
  imports: [MatDivider, MatIcon, SpecializationIconComponent],
})
export class PersonalityCardComponent implements OnInit {
  @Input() character!: Character;
  @Input() specialization: Specialization | undefined;

  constructor() {}

  ngOnInit(): void {}
}
