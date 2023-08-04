import {MagicType} from "./magic/MagicType";

export class Skill {
  name: string;
  spell?: string;
  strength: string;
  description: string;
  category: MagicType[];

  constructor(name: string, strength: string, description: string, spell: string, category: MagicType[]) {
    this.name = name;
    this.strength = strength;
    this.description = description;
    this.category = category;
  }
}
