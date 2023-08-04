import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatSort} from "@angular/material/sort";
import { DefinitionService } from 'src/app/service/DefinitionService';
import { DisplayElement } from 'src/app/models/DisplayElement';

@Component({
  selector: 'app-glossary',
  templateUrl: './glossary.component.html',
  styleUrls: ['./glossary.component.scss']
})
export class GlossaryComponent implements OnInit, AfterViewInit {
  
  displayedColumns: string[] = ['name', 'description'];
  definitions: DisplayElement[] = [];

  dataSource = new MatTableDataSource(this.definitions);

  @ViewChild(MatSort) sort: MatSort = new MatSort;

  constructor(private _liveAnnouncer: LiveAnnouncer) {
  }

  ngOnInit(): void {
    this.definitions = DefinitionService.getAll();
  }

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource(this.definitions);
    this.dataSource.sort = this.sort;
  }

}
