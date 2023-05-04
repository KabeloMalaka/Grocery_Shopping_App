import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
  standalone: true,
  providers: [HttpClient],
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule]
})
export class SignUpPage implements OnInit {

  signUpForm: FormGroup;
  shippingAddress: FormGroup;
  billingAddress: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router
    ) {
    this.shippingAddress = new FormGroup({
      street: new FormControl(null,Validators.required),
      city: new FormControl(null,Validators.required),
      province: new FormControl(null,Validators.required),
      zipCode: new FormControl(null,Validators.required),
    })

    this.billingAddress = new FormGroup({
      street: new FormControl(null,Validators.required),
      city: new FormControl(null,Validators.required),
      province: new FormControl(null,Validators.required),
      zipCode: new FormControl(null,Validators.required),
    })

    this.signUpForm = new FormGroup({
      firstName: new FormControl(null,Validators.required),
      lastName: new FormControl(null,Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      shippingAddress: this.shippingAddress,
      billingAddress: this.billingAddress
    });
  }

  ngOnInit() {
  }

  signUp() {
    console.log('What the fuck!!!');
    if (this.signUpForm.valid) {
      const user: User = new User();
      user.firstName = this.signUpForm.controls['firstName'].value;
      user.lastName = this.signUpForm.controls['lastName'].value;
      user.email = this.signUpForm.controls['email'].value;
      user.password = this.signUpForm.controls['password'].value;
      user.shippingAddress.street = this.signUpForm.get('shippingAddress.street')?.value;
      user.shippingAddress.city = this.signUpForm.get('shippingAddress.city')?.value;
      user.shippingAddress.province = this.signUpForm.get('shippingAddress.province')?.value;
      user.shippingAddress.zipCode = this.signUpForm.get('shippingAddress.zipCode')?.value;
      user.billingAddress.street = this.signUpForm.get('billingAddress.street')?.value;
      user.billingAddress.city = this.signUpForm.get('billingAddress.city')?.value;
      user.billingAddress.province = this.signUpForm.get('billingAddress.province')?.value;
      user.billingAddress.zipCode = this.signUpForm.get('billingAddress.zipCode')?.value;

      console.log('user', user);
      this.authService.signUp(user).subscribe(
        (response) => {
          console.log('response', response);
          this.router.navigate(['/login']);
        },
        (error) => {
          console.error('error', error);
        }
      );
    }
  }

}
