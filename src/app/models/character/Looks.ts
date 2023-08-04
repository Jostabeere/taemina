import {CharacterColor} from "./CharacterColor";

export class Looks {
  hairColor: CharacterColor;
  eyeColor: CharacterColor;
  skinColor?: CharacterColor;
  accessory?: string;
  body?: string;
  face?: string;

  constructor(hairColor: CharacterColor, eyeColor: CharacterColor, skinColor: CharacterColor, accessory: string, body: string, face: string) {
    this.hairColor = hairColor;
    this.eyeColor = eyeColor;
    this.skinColor = skinColor;
    this.accessory = accessory;
    this.body = body;
    this.face = face;
  }
}
