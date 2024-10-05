import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: '../sign-up/sign-up.component.scss',
})
export class SignInComponent {
  constructor(private router: Router) {}
  users: any[] = [];
  user: any = {
    email: '',
    password: '',
  };
  UsernotFound: boolean = false;
  IncorrectPassword: boolean = false;

  SignIn() {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      // If users exist, parse them into the users array
      this.users = JSON.parse(storedUsers);
    }

    const findUser = this.users.find((item) => item.email === this.user.email);
    if (!findUser) {
      this.UsernotFound = true;
    } else {
      if (findUser.password !== this.user.password) {
        this.IncorrectPassword = true;
      } else {
        localStorage.setItem('user', JSON.stringify(findUser));
        this.user = {
          email: '',
          password: '',
        };
        this.router.navigate(['/home']);
      }
    }
  }
}
