import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-thin-slider',
  templateUrl: './thin-slider.component.html',
  styleUrls: ['./thin-slider.component.scss']
})
export class ThinSliderComponent {
  @Input() value!: string;
}
