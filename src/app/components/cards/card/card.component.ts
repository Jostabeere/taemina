
import { Component, Input, OnInit } from '@angular/core';
import { MatCard } from '@angular/material/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
  imports: [MatCard],
})
export class CardComponent implements OnInit {
  @Input() heading: string = '';

  constructor() {}

  ngOnInit(): void {}
}
