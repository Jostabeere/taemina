import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-description-card',
  templateUrl: './description-card.component.html',
  styleUrls: ['./description-card.component.scss']
})
export class DescriptionCardComponent implements OnInit {

  @Input() description!: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
