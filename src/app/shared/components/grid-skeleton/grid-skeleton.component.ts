import {Component} from '@angular/core';

@Component({
  selector: 'app-grid-skeleton',
  templateUrl: './grid-skeleton.component.html',
  styleUrls: ['./grid-skeleton.component.css']
})
export class GridSkeletonComponent {
  items = [1];

  constructor() {
    this.items = Array(10).fill(this.items);
  }
}
