import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {
  MatHeaderCell,
  MatHeaderCellDef,
  MatTable,
  MatTableDataSource,
  MatTableModule,
} from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { characters } from '../../../data/Characters';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { CharacterService } from 'src/app/service/CharacterService';
import { HeaderRowOutlet } from '@angular/cdk/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatSliderModule } from '@angular/material/slider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';

import { CharacterIconComponent } from '../../character-icon/character-icon.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-characters-table',
  templateUrl: './characters-table.component.html',
  styleUrls: ['./characters-table.component.scss'],
  standalone: true,
  imports: [
    MatHeaderCell,
    MatHeaderCellDef,
    MatIconModule,
    MatGridListModule,
    MatSortModule,
    MatSliderModule,
    MatTableModule,
    MatMenuModule,
    MatTooltipModule,
    CharacterIconComponent,
    MatTable,
    RouterModule
],
})
export class CharactersTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['magic', 'firstName', 'lastName'];
  dataSource = new MatTableDataSource(CharacterService.getAllCharacters());

  @ViewChild(MatSort) sort: MatSort = new MatSort();

  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}
