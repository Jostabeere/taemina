
import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { PageContentHeaderComponent } from 'src/app/components/header/page-content-header/page-content-header.component';
import { specializationData } from 'src/app/data/SpecializationData';
import { Specialization } from 'src/app/models/Specialization';

@Component({
  selector: 'app-sources',
  templateUrl: './sources.component.html',
  styleUrls: ['./sources.component.scss'],
  standalone: true,
  imports: [MatIcon, PageContentHeaderComponent],
})
export class SourcesComponent implements OnInit {
  specializations: Specialization[] = specializationData;

  constructor() {}

  ngOnInit(): void {}
}
