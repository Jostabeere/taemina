
import { Food } from '../../../models/food/Food';
import { FoodService } from './../../../service/FoodService';
import { Component, OnInit } from '@angular/core';
import { CardComponent } from 'src/app/components/cards/card/card.component';
import { PageContentHeaderComponent } from 'src/app/components/header/page-content-header/page-content-header.component';
import { AvatarCardComponent } from 'src/app/components/cards/avatar-card/avatar-card.component';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss'],
  standalone: true,
  imports: [PageContentHeaderComponent, AvatarCardComponent],
})
export class FoodComponent implements OnInit {
  foods: Food[] = [];

  constructor() {}

  ngOnInit(): void {
    this.foods = FoodService.getAll();
  }
}
