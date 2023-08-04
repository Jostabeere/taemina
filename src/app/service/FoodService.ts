import { foods } from './../data/Foods';
import { Food } from '../models/food/Food';

export class FoodService {

  /**
   * Fetch all foods and sort them alphabetically.
   * @returns a list of foods.
   */
  public static getAll(): Food[] {
    return foods.sort((a: Food, b: Food) => {
      return a.name > b.name ? 1 : -1;
    });
  }
}
