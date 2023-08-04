import {Component, OnInit} from '@angular/core';
import { specializationData } from 'src/app/data/SpecializationData';
import { Specialization } from 'src/app/models/Specialization';

@Component({
  selector: 'app-sources',
  templateUrl: './sources.component.html',
  styleUrls: ['./sources.component.scss']
})
export class SourcesComponent implements OnInit {

  specializations: Specialization[] = specializationData;

  constructor() {
  }

  ngOnInit(): void {

  }
}
