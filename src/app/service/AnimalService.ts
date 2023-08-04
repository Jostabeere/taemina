import { animals } from './../data/Animals';
import { Animal } from "../models/animal/Animal";

export class AnimalService {

  public static getAllAnimals(): Animal[] {
    return animals.sort((a: Animal, b: Animal) => {
      return a.name > b.name ? 1 : -1;
    });
  }
}
