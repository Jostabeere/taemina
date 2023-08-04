import { Component, Input, OnInit } from '@angular/core';
import { Specialization } from '../../models/Specialization';
import { MatIcon } from '@angular/material/icon';


@Component({
  selector: 'app-specialization-icon',
  templateUrl: './specialization-icon.component.html',
  styleUrls: ['./specialization-icon.component.scss'],
  standalone: true,
  imports: [MatIcon],
})
export class SpecializationIconComponent implements OnInit {
  @Input() specialization!: Specialization;
  @Input() showLabel: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
