import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character/Character';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {

  @Input() image!: string | undefined;
  @Input() alternative: string | undefined = "";

  constructor() { 
  }

  ngOnInit(): void {
    
  }

}
