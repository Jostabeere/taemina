import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-runes',
  templateUrl: './runes.component.html',
  styleUrls: ['./runes.component.scss']
})
export class RunesComponent implements OnInit {

  displayedColumns: string[] = ['symbol', 'translation', 'meaning'];
  dataSource = [
    { name: 'A', symbol: 'Reichtum' },
    { name: 'B', symbol: 'Hoffnung' },
    { name: 'C', symbol: 'Offenbarung' },
    { name: 'D', symbol: 'Willenskraft' },
    { name: 'E', symbol: 'Neubeginn' },
    { name: 'G', symbol: 'Reife' },
    { name: 'H', symbol: 'Kraft' },
    { name: 'I', symbol: 'Ruhm', alternatives: '| J | Y' },
    { name: 'K', symbol: 'Frieden' },
    { name: 'L', symbol: 'Leidenschaft' },
    { name: 'M', symbol: 'Herausforderung' },
    { name: 'N', symbol: 'Fruchtbarkeit' },
    { name: 'O', symbol: 'Gerechtigkeit' },
    { name: 'P', symbol: 'Weisheit' },
    { name: 'Q', symbol: 'Gleichgewicht' },
    { name: 'R', symbol: 'Sicherheit' },
    { name: 'S', symbol: 'Mut' },
    { name: 'T', symbol: 'Verbindung' },
    { name: 'U', symbol: 'Wendepunkt' },
    { name: 'V', symbol: 'Veränderung', alternatives: '| F' },
    { name: 'W', symbol: 'Inspiration' },
    { name: 'X', symbol: 'Selbsterkenntnis' },
    { name: 'Z', symbol: 'Selbstlosigkeit' },
    { name: 'Ä', symbol: 'Zufriedenheit' },
    { name: 'Ö', symbol: 'Gemeinschaft' },
    { name: 'Ü', symbol: 'Vollkommenheit' },
    { name: 'ß', symbol: 'Fortschritt' },
    { name: '.', symbol: 'Frohsinn', alternatives: '| !' },
    { name: '?', symbol: 'Frage' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  foo(): void {
    window.open('/font/Taemina-Regular.ttf', '_blank');
  }

}
