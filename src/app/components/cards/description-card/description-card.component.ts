import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-description-card',
  templateUrl: './description-card.component.html',
  styleUrls: ['./description-card.component.scss'],
  standalone: true,
})
export class DescriptionCardComponent implements OnInit {
  @Input() description!: string;

  constructor() {}

  ngOnInit(): void {}
}
