import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Character } from 'src/app/models/character/Character';
import { Specialization } from 'src/app/models/Specialization';
import { CharacterService } from 'src/app/service/CharacterService';
import { MagicService } from 'src/app/service/MagicService';

@Component({
  selector: 'app-character-showcase',
  templateUrl: './character-showcase.component.html',
  styleUrls: ['./character-showcase.component.scss']
})
export class CharacterShowcaseComponent implements OnInit {

  characterTypeString: string | null = "";
  character: Character | undefined;
  specialization: Specialization | undefined;
  magicIcon: string = "";

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.characterTypeString = this.route.snapshot.paramMap.get("characterType");
    if (this.characterTypeString) {
      this.character = CharacterService.getCharacterByCharacterType(this.characterTypeString);
    }

    if (this.character) {
      this.magicIcon = MagicService.getMagicIconByCharacter(this.character);
      this.specialization = MagicService.getSpecialization(this.character);
    }
  }

  getCharacterTitle(): string {
    if (this.character) {
      const firstName = this.character.name;
      const middleName = this.character.specialName ? "'" + this.character.specialName + "'" : "";
      const lastName = this.character.lastName;

      return firstName + " " + middleName + " " + lastName;
    }
    return "";
  }

  getCharacterSubtitles(): string[] {
    const subtitles: string[] = [];
    this.character?.meanings.forEach(meaning => {
      subtitles.push(meaning.property + " (" + meaning.language + "): \"" + meaning.translation + "\"");
    });
    return subtitles;
  }
}
