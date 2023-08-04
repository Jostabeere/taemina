import { Component, Input, OnInit } from '@angular/core';
import { LoveInterest } from "../../models/character/LoveInterest";

@Component({
  selector: 'app-love-interest',
  templateUrl: './love-interest.component.html',
  styleUrls: ['./love-interest.component.scss']
})
export class LoveInterestComponent implements OnInit {

  @Input() loveInterest!: LoveInterest;

  constructor() {
  }

  ngOnInit(): void {
  }

}
