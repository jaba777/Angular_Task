import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from '../Services/hero.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  constructor(
    private router: Router,
    private readonly heroService: HeroService
  ) {}
  users: any[] = [];
  user: any = {
    name: '',
    surname: '',
    email: '',
    password: '',
  };
  isRegistered: boolean = false;

  handleSubmit() {
    //const storedUsers = localStorage.getItem('users');
    const storedUsers = this.heroService.getUsers();
    if (storedUsers) {
      this.users = JSON.parse(storedUsers);
    }

    const findUser = this.users.find((item) => item.email === this.user.email);

    if (findUser) {
      this.isRegistered = true;
    } else {
      this.users.push(this.user);
      this.heroService.setInStorage('users', JSON.stringify(this.users));
      this.user = {
        name: '',
        surname: '',
        email: '',
        password: '',
      };

      this.router.navigate(['/sign-in']);
    }
  }
}
