import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/models/animal/Animal';
import { AnimalService } from 'src/app/service/AnimalService';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss']
})
export class AnimalsComponent implements OnInit {

  animals: Animal[] = [];

  constructor() {}

  ngOnInit(): void {
    this.animals = AnimalService.getAllAnimals();
  }
}
