export class Pet {
  name: string;
  icon?: string;
  description?: string;
  image?: string;

  constructor(name: string, icon: string, description: string, image: string) {
    this.name = name;
    this.icon = icon;
    this.description = description;
    this.image = image;
  }
}
