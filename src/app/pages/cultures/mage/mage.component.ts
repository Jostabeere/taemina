import { Component, OnInit } from '@angular/core';
import { figuresOfSpeech } from 'src/app/data/Definitions';
import { Fact } from 'src/app/models/facts/Fact';

@Component({
  selector: 'app-mage',
  templateUrl: './mage.component.html',
  styleUrls: ['./mage.component.scss']
})
export class MageComponent implements OnInit {

  days: string[] = [
    "Einheitstag 'Regly'",
    "Lichttag 'Neruly'",
    "Feuertag 'Quaely'",
    "Wassertag 'Pasly'",
    "Erdtag 'Jaly'",
    "Lufttag 'Lobaly'",
    "Glückstag 'Mely'",
    "Schaffungstag 'Shupuly'",
    "Genesungstag 'Imoly'",
    "Berührungstag 'Anihaly'",
    "Zeittag 'Baely'",
    "Gefühlstag 'Haely'",
    "Illusionstag 'Wamly'",
    "Stärkungstag 'Fauly'",
    "Pflanzentag 'Dufly'",
    "Blitztag 'Hizly'",
    "Eistag 'Genly'",
    "Tiertag 'Gachuly'",
    "Geistertag 'Phololy'",
    "Schicksalstag 'Fallahly'",
    "Jenseitstag 'Muzamly'",
    "Schönheitstag 'Lurizly'",
    "Veränderungstag 'Shorely'",
    "Wundertag 'Kabamly'",
    "Musiktag 'Lialy'",
    "Bluttag 'Tyvalahly'",
    "Meerestag 'Pasoly'",
    "Liebestag 'Halaly'",
    "Seelentag 'Phualy'",
    "Verbindungstag 'Wanoly'",
    "Schattentag 'Akuly'",
  ];

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

  displayedColumns: string[] = [
    "Redewendung",
    "Bedeutung",
    "Hinweise",
  ];

  facts: Fact[] = figuresOfSpeech;

  constructor() { }

  ngOnInit(): void {
  }

}
