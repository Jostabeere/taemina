import { DisplayElement } from "../DisplayElement";

export class Fact extends DisplayElement {
    additionalInformation?: string;
  
    constructor(name: string, description: string, additionalInformation?: string) {
        super(name, description)
      this.additionalInformation = additionalInformation;
    }
  }
  