
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-thin-slider',
  templateUrl: './thin-slider.component.html',
  styleUrls: ['./thin-slider.component.scss'],
  standalone: true,
  imports: [MatSliderModule, MatInputModule, FormsModule],
})
export class ThinSliderComponent {
  @Input() value!: string;
}
