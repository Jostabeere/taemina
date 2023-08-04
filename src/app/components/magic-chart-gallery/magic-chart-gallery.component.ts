import { Component, OnInit } from '@angular/core';
import { specializationData } from "../../data/SpecializationData";
import * as d3 from 'd3-shape';
import { ChartData } from "../../models/charts/ChartData";
import { ChartValue } from "../../models/charts/ChartValue";
import { GalleryData } from "../../models/charts/GalleryData";

@Component({
  selector: 'app-magic-chart-gallery',
  templateUrl: './magic-chart-gallery.component.html',
  styleUrls: ['./magic-chart-gallery.component.scss']
})
export class MagicChartGalleryComponent implements OnInit {

  data: GalleryData[] = [];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = false;
  polarShape = d3.curveLinearClosed;

  constructor() {
  }

  onSelect(event: any) {
  }

  ngOnInit(): void {
    this.data = this.getSpecializationData();
  }

  getSpecializationData(): GalleryData[] {
    let data: GalleryData[] = [];

    specializationData.forEach(spec => {
      const chartData: ChartData = new ChartData(spec.name, [
        new ChartValue("Angriff", spec.offensive),
        new ChartValue("Verteidigung", spec.defensive),
        new ChartValue("Unterstützung", spec.support),
        new ChartValue("Prestige", spec.prestige),
      ]);
      const galleryData: GalleryData = new GalleryData(spec, chartData);

      data.push(galleryData);
    }
    );

    return data;
  }
}
