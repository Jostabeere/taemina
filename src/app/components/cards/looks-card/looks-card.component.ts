import {Component, Input, OnInit} from '@angular/core';
import {Looks} from "../../../models/character/Looks";

@Component({
  selector: 'app-looks-card',
  templateUrl: './looks-card.component.html',
  styleUrls: ['./looks-card.component.scss']
})
export class LooksCardComponent implements OnInit {

  @Input() looks!: Looks;
  @Input() symbol: String | undefined = "";

  constructor() {
  }

  ngOnInit(): void {
  }

}
