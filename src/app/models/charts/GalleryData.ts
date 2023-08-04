import {Specialization} from "../Specialization";
import {ChartData} from "./ChartData";

export class GalleryData {
  specialization: Specialization;
  chartData: ChartData;

  constructor(specialization: Specialization, chartData: ChartData) {
    this.specialization = specialization;
    this.chartData = chartData;
  }
}
