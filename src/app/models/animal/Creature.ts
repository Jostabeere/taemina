export class Creature {
    name: string;
    description: string;
    image?: string;
  
    constructor(name: string, description: string, image: string) {
      this.name = name;
      this.description = description;
      this.image = image;
    }
  }
  