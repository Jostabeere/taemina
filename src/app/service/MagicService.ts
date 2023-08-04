import { specializationData } from "../data/SpecializationData";
import { Specialization } from "../models/Specialization";
import { MagicType } from "../models/magic/MagicType";
import { Character } from "../models/character/Character";

export class MagicService {

  public static getMagicData(): Specialization[] {
    return specializationData;
  }

  public static getMagicIcon(magic: MagicType): string {
    const specialization = specializationData.find(m => m.magic == magic);
    if (specialization) {
      return specialization.icon;
    }
    return "";
  }


  public static getMagicIconByCharacter(character: Character): string {
    if (character.magic) {
      const specialization = specializationData.find(m => m.magic == character.magic);
      if (specialization) {
        return specialization.icon;
      }
    }

    return "";
  }

  public static getSpecializationByMagic(magic: MagicType): Specialization | undefined {
    return specializationData.find(m => m.magic == magic);
  }

  public static getSpecialization(character: Character): Specialization | undefined {
    if (character.magic) {
      return specializationData.find(m => m.magic == character.magic);
    }
    return undefined;
  }
}
