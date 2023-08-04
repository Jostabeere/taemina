import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import {
  MatCell,
  MatHeaderCell,
  MatRow,
  MatTable,
  MatTableDataSource,
  MatTableModule,
} from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort } from '@angular/material/sort';
import { Fact } from 'src/app/models/facts/Fact';

import { MatGridList } from '@angular/material/grid-list';

@Component({
  selector: 'app-fact-table',
  templateUrl: './fact-table.component.html',
  styleUrls: ['./fact-table.component.scss'],
  standalone: true,
  imports: [
    MatHeaderCell,
    MatTable,
    MatRow,
    MatCell,
    MatGridList,
    MatTableModule
],
})
export class FactTableComponent implements AfterViewInit {
  dataSource = new MatTableDataSource<Fact>([]);

  @ViewChild(MatSort) sort: MatSort = new MatSort();

  @Input() displayedColumns!: string[];
  @Input() facts!: Fact[];

  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource<Fact>(this.facts);
    this.dataSource.sort = this.sort;
  }
}
