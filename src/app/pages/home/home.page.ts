import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class HomePage implements OnInit {

  items: string[];

  constructor() {
    this.items = [];
  }

  ngOnInit(): void {
    this.items = ['Apples', 'Bananas', 'Beef steak', 'Bread', 'Coca Cola', 'Tastic Rice', 'Apples', 'Bananas', 'Beef steak'];
  }
}
