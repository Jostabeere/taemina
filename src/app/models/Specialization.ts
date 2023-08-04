import { MagicType } from "./magic/MagicType";

export class Specialization {
  name: string;
  description?: string;
  weakness?: MagicType;
  icon: string;
  iconName: string;
  color: string;
  offensive: number;
  defensive: number;
  support: number;
  prestige: number;
  magic: MagicType;

  constructor(name: string,
    description: string,
    icon: string,
    iconName: string,
    color: string,
    offensive: number,
    defensive: number,
    support: number,
    healing: number,
    prestige: number,
    weakness: MagicType,
    magic: MagicType) {
    this.name = name;
    this.description = description;
    this.icon = icon;
    this.iconName = iconName;
    this.color = color;
    this.offensive = offensive;
    this.defensive = defensive;
    this.support = support;
    this.prestige = prestige;
    this.magic = magic;
    this.weakness = weakness;
  }
}
