import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { LiveAnnouncer } from "@angular/cdk/a11y";
import { characters } from "../../../data/Characters";
import { MatSort } from "@angular/material/sort";
import { CharacterService } from 'src/app/service/CharacterService';

@Component({
  selector: 'app-characters-table',
  templateUrl: './characters-table.component.html',
  styleUrls: ['./characters-table.component.scss']
})
export class CharactersTableComponent implements AfterViewInit {

  displayedColumns: string[] = ['magic', 'firstName', 'lastName'];
  dataSource = new MatTableDataSource(CharacterService.getAllCharacters());

  @ViewChild(MatSort) sort: MatSort = new MatSort;

  constructor(private _liveAnnouncer: LiveAnnouncer) {
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}
