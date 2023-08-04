import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { Character } from 'src/app/models/character/Character';
import { CharacterService } from 'src/app/service/CharacterService';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  characters: Character[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.characters = CharacterService.getAllCharacters();
  }

  routeToCharacterShowCase(): void {
    this.router.navigate(['/characters/character-showcase', 12]);
  }
}
