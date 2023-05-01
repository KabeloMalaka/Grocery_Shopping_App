import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CartPage implements OnInit {

  items: string[];

  constructor() {
    this.items = [];
  }

  ngOnInit(): void {
    this.items = ['Apples', 'Bananas', 'Beef steak', 'Bread'];
  }
}
