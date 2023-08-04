import {ChartValue} from "./ChartValue";

export class ChartDataPoints {
  name: string;
  series: ChartValue[];

  constructor(name: string, series: ChartValue[]) {
    this.name = name;
    this.series = series;
  }
}
