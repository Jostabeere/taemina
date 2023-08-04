import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-classes-card',
  templateUrl: './classes-card.component.html',
  styleUrls: ['./classes-card.component.scss']
})
export class ClassesCardComponent implements OnInit {

  @Input() classes: string[] | undefined = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
