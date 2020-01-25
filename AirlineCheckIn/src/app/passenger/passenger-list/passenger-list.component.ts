import { Component, OnInit } from '@angular/core';

export interface Tile {
  cols: number;
  text: string;
  color: string;
}

@Component({
  selector: 'app-passenger-list',
  templateUrl: './passenger-list.component.html',
  styleUrls: ['./passenger-list.component.css']
})
export class PassengerListComponent implements OnInit {
  tiles: Tile[] = [
    {text: 'One', cols: 4, color: 'lightblue'},
    {text: 'Two', cols: 4, color: 'lightgreen'},
    {text: 'Three', cols: 4, color: 'lightpink'},
    {text: 'Four', cols: 4, color: '#DDBDF1'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
