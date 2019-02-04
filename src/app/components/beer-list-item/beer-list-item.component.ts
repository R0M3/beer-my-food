import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-beer-list-item',
  templateUrl: './beer-list-item.component.html',
  styleUrls: ['./beer-list-item.component.scss']
})
export class BeerListItemComponent implements OnInit {
  @Input() name: string;
  @Input() image: string;
  @Input() tagline: string;
  
  constructor() { }

  ngOnInit() {
  }

}
