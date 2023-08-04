import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from 'src/app/models/character/Character';
import { CharacterService } from 'src/app/service/CharacterService';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSliderModule } from '@angular/material/slider';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PageContentHeaderComponent } from 'src/app/components/header/page-content-header/page-content-header.component';
import { CharactersTableComponent } from 'src/app/components/table/characters-table/characters-table.component';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
  standalone: true,
  imports: [
    MatIconModule,
    MatGridListModule,
    MatSortModule,
    NgxChartsModule,
    MatSliderModule,
    MatTableModule,
    MatMenuModule,
    MatTooltipModule,
    PageContentHeaderComponent,
    CharactersTableComponent
],
})
export class CharactersComponent implements OnInit {
  characters: Character[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.characters = CharacterService.getAllCharacters();
  }

  routeToCharacterShowCase(): void {
    this.router.navigate(['/characters/character-showcase', 12]);
  }
}
