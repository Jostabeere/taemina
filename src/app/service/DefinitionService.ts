import { definitions } from "../data/Definitions";
import { DisplayElement } from "../models/DisplayElement";


export class DefinitionService {

  public static getAll(): DisplayElement[] {
    return definitions.sort((a: DisplayElement, b: DisplayElement) => {
      return a.name > b.name ? 1 : -1;
    });
  }
}
