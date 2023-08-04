import { CharacterType } from './CharacterType';
export class LoveInterest {
  person: CharacterType;
  interest: number;
  notes?: string;

  constructor(person: CharacterType, interest: number, notes: string) {
    this.person = person;
    this.interest = interest;
    this.notes = notes;
  }
}
