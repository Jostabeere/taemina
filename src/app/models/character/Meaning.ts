export class Meaning {
  property: string;
  language?: string;
  translation: string;

  constructor(property: string, language: string, translation: string) {
    this.property = property;
    this.language = language;
    this.translation = translation;
  }
}
