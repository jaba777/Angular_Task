import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from '../Services/hero.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: '../sign-up/sign-up.component.scss',
})
export class SignInComponent {
  constructor(
    private router: Router,
    private readonly heroService: HeroService
  ) {}
  users: any[] = [];
  user: any = {
    email: '',
    password: '',
  };
  UsernotFound: boolean = false;
  IncorrectPassword: boolean = false;

  SignIn() {
    const storedUsers = this.heroService.getUsers();
    if (storedUsers) {
      this.users = JSON.parse(storedUsers);
    }

    const findUser = this.users.find((item) => item.email === this.user.email);
    if (!findUser) {
      this.UsernotFound = true;
    } else {
      if (findUser.password !== this.user.password) {
        this.IncorrectPassword = true;
      } else {
        this.heroService.setInStorage('user', JSON.stringify(findUser));
        this.user = {
          email: '',
          password: '',
        };
        this.router.navigate(['/home']);
      }
    }
  }
}
