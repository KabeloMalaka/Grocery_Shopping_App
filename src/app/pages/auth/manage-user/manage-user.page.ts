import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.page.html',
  styleUrls: ['./manage-user.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class ManageUserPage implements OnInit {

  signUpForm: FormGroup;

  constructor() {
    const shippingAddress = new FormGroup({
      street: new FormControl(),
      city: new FormControl(),
      province: new FormControl(),
      zipCode: new FormControl(),
    })

    const billingAddress = new FormGroup({
      street: new FormControl(),
      city: new FormControl(),
      province: new FormControl(),
      zipCode: new FormControl(),
    })

    this.signUpForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      shippingAddress: shippingAddress,
      billingAddress: billingAddress
    });
  }

  ngOnInit() {
  }

}
