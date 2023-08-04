
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AvatarComponent } from 'src/app/components/avatar/avatar.component';
import { PageContentHeaderComponent } from 'src/app/components/header/page-content-header/page-content-header.component';
import { Character } from 'src/app/models/character/Character';
import { CharacterService } from 'src/app/service/CharacterService';

@Component({
  selector: 'app-teachers',
  imports: [
    PageContentHeaderComponent,
    MatTooltipModule,
    MatCardModule,
    AvatarComponent
],
  templateUrl: './teachers.component.html',
  styleUrl: './teachers.component.scss',
})
export class TeachersComponent implements OnInit {
  teachers: Character[] = [];

  ngOnInit(): void {
    this.teachers = CharacterService.getAllCharacters().filter(
      (c) => c.isTeacher
    );
  }
}
