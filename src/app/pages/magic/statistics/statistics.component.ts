import { Component, OnInit } from '@angular/core';
import { PageContentHeaderComponent } from 'src/app/components/header/page-content-header/page-content-header.component';
import { MagicChartGalleryComponent } from 'src/app/components/magic-chart-gallery/magic-chart-gallery.component';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
  standalone: true,
  imports: [PageContentHeaderComponent, MagicChartGalleryComponent],
})
export class StatisticsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
