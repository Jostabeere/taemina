import { Food } from '../../../models/food/Food';
import { FoodService } from './../../../service/FoodService';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {

  foods: Food[] = [];

  constructor() {}

  ngOnInit(): void {
    this.foods = FoodService.getAll();
  }
}
