import {Extent} from "./Extent";

export class Trait {
  key: Extent;
  value: string;
  icon: string;
  positive: boolean;

  constructor(key: Extent, value: string, icon: string, positive: boolean) {
    this.key = key;
    this.value = value;
    this.icon = icon;
    this.positive = positive;
  }
}
