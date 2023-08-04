import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatSort} from "@angular/material/sort";
import { DefinitionService } from 'src/app/service/DefinitionService';
import { DisplayElement } from 'src/app/models/DisplayElement';
import { Fact } from 'src/app/models/facts/Fact';

@Component({
  selector: 'app-fact-table',
  templateUrl: './fact-table.component.html',
  styleUrls: ['./fact-table.component.scss']
})
export class FactTableComponent implements AfterViewInit {

  dataSource = new MatTableDataSource<Fact>([]);

  @ViewChild(MatSort) sort: MatSort = new MatSort;

  @Input() displayedColumns!: string[];
  @Input() facts!: Fact[];

  constructor(private _liveAnnouncer: LiveAnnouncer) {
  }

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource<Fact>(this.facts);
    this.dataSource.sort = this.sort;
  }
}