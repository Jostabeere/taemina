import {Component, Input, OnInit} from '@angular/core';
import {Trait} from "../../../models/character/Trait";

@Component({
  selector: 'app-traits-card',
  templateUrl: './traits-card.component.html',
  styleUrls: ['./traits-card.component.scss']
})
export class TraitsCardComponent implements OnInit {

  @Input() traits!: Trait[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
