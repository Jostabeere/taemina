import { Looks } from "./Looks";
import { Skill } from "../Skill";
import { LoveInterest } from "./LoveInterest";
import { Trait } from "./Trait";
import { MagicType } from "../magic/MagicType";
import { CharacterType } from "./CharacterType";
import { Meaning } from "./Meaning";
import { Pet } from "../animal/Pet";
import { Creature } from "../animal/Creature";

export class Character extends Creature {
  characterType: CharacterType;
  name: string;
  specialName?: string;
  lastName: string;
  age?: string;
  birthday?: string;
  citation?: string;
  meanings: Meaning[];
  mbti?: string;
  past?: string;
  problem?: string;
  development?: string;
  image?: string;
  skills: Skill[];
  traits: Trait[];
  classes?: string[];
  looks: Looks;
  magic?: MagicType;
  loveInterests?: LoveInterest[];
  pets?: Pet[];



  constructor(characterType: CharacterType, name: string, specialName: string, lastName: string, age: string, birthday: string, citation: string, meanings: Meaning[],
    mbti: string, past: string, problem: string, development: string, description: string, image: string,
    skills: Skill[], traits: Trait[], classes: string[], looks: Looks, magic: MagicType, loveInterests: LoveInterest[], pets: Pet[]) {
    super(name, description, image);

    this.characterType = characterType;
    this.name = name;
    this.specialName = specialName;
    this.lastName = lastName;
    this.age = age;
    this.citation = citation;
    this.meanings = meanings;
    this.mbti = mbti;
    this.past = past;
    this.problem = problem;
    this.development = development;
    this.image = image;
    this.skills = skills;
    this.traits = traits;
    this.classes = classes;
    this.looks = looks;
    this.magic = magic;
    this.loveInterests = loveInterests;
    this.pets = pets;
  }
}
