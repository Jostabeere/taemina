
import { Component, OnInit } from '@angular/core';
import { CardComponent } from 'src/app/components/cards/card/card.component';
import { PageContentHeaderComponent } from 'src/app/components/header/page-content-header/page-content-header.component';
import { Animal } from 'src/app/models/animal/Animal';
import { AnimalService } from 'src/app/service/AnimalService';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss'],
  standalone: true,
  imports: [
    CardComponent,
    PageContentHeaderComponent,
    PageContentHeaderComponent
],
})
export class AnimalsComponent implements OnInit {
  animals: Animal[] = [];

  constructor() {}

  ngOnInit(): void {
    this.animals = AnimalService.getAllAnimals();
  }
}
