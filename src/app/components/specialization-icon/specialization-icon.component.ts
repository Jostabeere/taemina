import {Component, Input, OnInit} from '@angular/core';
import {Specialization} from "../../models/Specialization";

@Component({
  selector: 'app-specialization-icon',
  templateUrl: './specialization-icon.component.html',
  styleUrls: ['./specialization-icon.component.scss']
})
export class SpecializationIconComponent implements OnInit {

  @Input() specialization!: Specialization;
  @Input() showLabel: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

}
