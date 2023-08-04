import {ChartValue} from "./ChartValue";

export class ChartData {
  name: string;
  series: ChartValue[];

  constructor(name: string, series: ChartValue[]) {
    this.name = name;
    this.series = series;
  }
}
