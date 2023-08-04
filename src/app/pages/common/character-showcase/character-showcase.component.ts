
import { Component, OnInit } from '@angular/core';
import { MatCardContent, MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';
import { AvatarCardComponent } from 'src/app/components/cards/avatar-card/avatar-card.component';
import { CardComponent } from 'src/app/components/cards/card/card.component';
import { DescriptionCardComponent } from 'src/app/components/cards/description-card/description-card.component';
import { ListCardComponent } from 'src/app/components/cards/list-card/list-card.component';
import { LooksCardComponent } from 'src/app/components/cards/looks-card/looks-card.component';
import { PersonalityCardComponent } from 'src/app/components/cards/personality-card/personality-card.component';
import { SkillCardComponent } from 'src/app/components/cards/skill-card/skill-card.component';
import { TraitsCardComponent } from 'src/app/components/cards/traits-card/traits-card.component';
import { LoveInterestComponent } from 'src/app/components/love-interest/love-interest.component';
import { Character } from 'src/app/models/character/Character';
import { Specialization } from 'src/app/models/Specialization';
import { CharacterService } from 'src/app/service/CharacterService';
import { MagicService } from 'src/app/service/MagicService';

@Component({
  selector: 'app-character-showcase',
  templateUrl: './character-showcase.component.html',
  styleUrls: ['./character-showcase.component.scss'],
  standalone: true,
  imports: [
    AvatarCardComponent,
    LoveInterestComponent,
    CardComponent,
    ListCardComponent,
    SkillCardComponent,
    LooksCardComponent,
    TraitsCardComponent,
    PersonalityCardComponent,
    DescriptionCardComponent,
    MatIcon,
    MatCardContent,
    MatCardModule
],
})
export class CharacterShowcaseComponent implements OnInit {
  characterTypeString: string | null = '';
  character: Character | undefined;
  specialization: Specialization | undefined;
  magicIcon: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.characterTypeString =
      this.route.snapshot.paramMap.get('characterType');
    if (this.characterTypeString) {
      this.character = CharacterService.getCharacterByCharacterType(
        this.characterTypeString
      );
    }

    if (this.character) {
      this.magicIcon = MagicService.getMagicIconByCharacter(this.character);
      this.specialization = MagicService.getSpecialization(this.character);
    }
  }

  getCharacterTitle(): string {
    if (this.character) {
      const firstName = this.character.name;
      const middleName = this.character.specialName
        ? "'" + this.character.specialName + "'"
        : '';
      const lastName = this.character.lastName;

      return firstName + ' ' + middleName + ' ' + lastName;
    }
    return '';
  }

  getCharacterSubtitles(): string[] {
    const subtitles: string[] = [];
    this.character?.meanings.forEach((meaning) => {
      subtitles.push(
        meaning.property +
          ' (' +
          meaning.language +
          '): "' +
          meaning.translation +
          '"'
      );
    });
    return subtitles;
  }
}
