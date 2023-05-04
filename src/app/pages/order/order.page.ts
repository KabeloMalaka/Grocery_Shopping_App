import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class OrderPage implements OnInit {

  items: string[];

  constructor() {
    this.items = [];
  }

  ngOnInit(): void {
    this.items = ['Order#1', 'Order#2'];
  }
}
