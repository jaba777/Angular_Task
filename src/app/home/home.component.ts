import { Component } from '@angular/core';
import { Items } from '../data/items-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  items = Items;
}
