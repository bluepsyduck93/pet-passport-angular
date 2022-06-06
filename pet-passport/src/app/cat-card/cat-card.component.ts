import { Component, OnInit } from '@angular/core';
import { Cat } from '../interfaces/cat';

@Component({
  selector: 'app-cat-card',
  templateUrl: './cat-card.component.html',
  styleUrls: ['./cat-card.component.scss']
})
export class CatCardComponent implements OnInit {

  cat: Cat = {
    id: 1,
    name: 'Suki',
    toy: 'Fish'
  }

  constructor() { }

  ngOnInit(): void {
  }
  
}
