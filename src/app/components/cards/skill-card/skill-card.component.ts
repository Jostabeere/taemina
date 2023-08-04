import {Component, Input, OnInit} from '@angular/core';
import {Skill} from "../../../models/Skill";
import {MagicType} from "../../../models/magic/MagicType";
import {MagicService} from "../../../service/MagicService";

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.scss']
})
export class SkillCardComponent implements OnInit {

  @Input() skills!: Skill[];

  constructor() {
  }

  ngOnInit(): void {
  }

  getIcon(magic: MagicType): string {
    const icon = MagicService.getMagicIcon(magic);

    if (icon) {
      return icon;
    }
    return "";
  }
}
