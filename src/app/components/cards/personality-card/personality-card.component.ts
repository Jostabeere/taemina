import {Component, Input, OnInit} from '@angular/core';
import { Specialization } from 'src/app/models/Specialization';
import {Character} from "../../../models/character/Character";

@Component({
  selector: 'app-personality-card',
  templateUrl: './personality-card.component.html',
  styleUrls: ['./personality-card.component.scss']
})
export class PersonalityCardComponent implements OnInit {

  @Input() character!: Character;
  @Input() specialization: Specialization | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

}
