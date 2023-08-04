
import { Component, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { PageContentHeaderComponent } from 'src/app/components/header/page-content-header/page-content-header.component';
import { FactTableComponent } from 'src/app/components/table/fact-table/fact-table.component';
import { figuresOfSpeech } from 'src/app/data/Definitions';
import { Fact } from 'src/app/models/facts/Fact';

@Component({
  selector: 'app-mage',
  templateUrl: './mage.component.html',
  styleUrls: ['./mage.component.scss'],
  standalone: true,
  imports: [
    MatListModule,
    FactTableComponent,
    PageContentHeaderComponent
],
})
export class MageComponent implements OnInit {
  months: string[] = [
    "Huftier 'Dyresper balbae' (Januar)",
    "Nager 'Alieshper balbae' (Februar)",
    "Fisch 'Bokomper balbae' (März)",
    "Fledermaus 'Suleshiper balbae' (April)",
    "Vogel 'Budashaper balbae' (Mai)",
    "Amphibie 'Koleoper balbae' (Juni)",
    "Katze 'Goyomper balbae' (Juli)",
    "Reptil 'Koleshper balbae' (August)",
    "Fuchs 'Kemenper balbae' (September)",
    "Wolf 'Meolemper balbae' (Oktober)",
    "Insekt 'Quolishper balbae' (November)",
    "Bär 'Bamalper balbae' (Dezember)",
  ];

  facts: Fact[] = figuresOfSpeech;

  constructor() {}

  ngOnInit(): void {}
}
