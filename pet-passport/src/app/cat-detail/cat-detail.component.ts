import { Component, OnInit, Input } from '@angular/core';
import { Cat } from '../interfaces/cat';
@Component({
  selector: 'app-cat-detail',
  templateUrl: './cat-detail.component.html',
  styleUrls: ['./cat-detail.component.scss']
})
export class CatDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() cat?: Cat;

}
