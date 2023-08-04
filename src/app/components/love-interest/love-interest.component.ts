import { Component, Input, OnInit } from '@angular/core';
import { LoveInterest } from '../../models/character/LoveInterest';
import { ThinSliderComponent } from '../thin-slider/thin-slider.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'app-love-interest',
  templateUrl: './love-interest.component.html',
  styleUrls: ['./love-interest.component.scss'],
  standalone: true,
  imports: [ThinSliderComponent, MatIconModule, MatTooltip],
})
export class LoveInterestComponent implements OnInit {
  @Input() loveInterest!: LoveInterest;

  constructor() {}

  ngOnInit(): void {}
}
