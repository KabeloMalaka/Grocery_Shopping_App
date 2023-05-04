import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { LoginDetails } from 'src/app/models/loginDetails.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)])
    });
  }

  ngOnInit() {
    if(this.authService.isLoggedIn){
      this.router.navigate(['/home']);
    }
  }

  signIn() {
    if(this.loginForm.valid) {
      const loginDetails: LoginDetails = new LoginDetails();
      loginDetails.email = this.loginForm.get('email')?.value;
      loginDetails.password = this.loginForm.get('password')?.value;

      this.authService.signIn(loginDetails).subscribe(
        (response) => {
          console.log('response', response);
          this.authService.loggedin();
          this.router.navigate(['/home']);
        },
        (error) => {
          console.error('error', error);
        }
      );
    }
  }
}
