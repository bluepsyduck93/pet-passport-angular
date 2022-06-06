import { Component, OnInit } from '@angular/core';
import { Cat } from '../interfaces/cat';
import { CATS } from '../mocks/mock-cats';

@Component({
  selector: 'app-cat-card',
  templateUrl: './cat-card.component.html',
  styleUrls: ['./cat-card.component.scss']
})
export class CatCardComponent implements OnInit {
  cats = CATS
  selectedCat?: Cat;
  onSelect(cat: Cat): void {
    this.selectedCat = cat
    console.log(this.selectedCat)
  }
  constructor() { }

  ngOnInit(): void {
  }
  
}
