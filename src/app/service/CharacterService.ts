import { Character } from '../models/character/Character';
import { characters } from '../data/Characters';
import { CharacterType } from '../models/character/CharacterType';

export class CharacterService {
  public static getAllCharacters(): Character[] {
    let all: Character[] = characters;
    return all;
  }

  static getCharacterByCharacterType(
    characterTypeString: string
  ): Character | undefined {
    if (characterTypeString) {
      return this.getAllCharacters().find(
        (c) => c.characterType.toString() == characterTypeString
      );
    }
    return undefined;
  }

  static getCharacterName(characterType: CharacterType): Character | undefined {
    if (characterType) {
      const character = this.getAllCharacters().find(
        (c) => c.characterType.toString() == characterType
      );
      if (character) {
        return character;
      }
    }
    return undefined;
  }

  static getCharacterTitle(character: Character): string {
    const firstName = character.name;
    const middleName = character.specialName
      ? "'" + character.specialName + "'"
      : '';
    const lastName = character.lastName;

    return firstName + ' ' + middleName + ' ' + lastName;
  }

  static getCharacterSubtitles(character: Character): string[] {
    const subtitles: string[] = [];
    character.meanings.forEach((meaning) => {
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
