import { Component } from '@angular/core';
import { HeroService } from '../Services/hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(
    public readonly heroService: HeroService,
    private readonly router: Router
  ) {}
  user: any;

  ngOnInit(): void {
    const storedUser = this.heroService.getUsers();
    if (storedUser) {
      this.user = JSON.parse(storedUser);
    }
  }

  SignOut() {
    this.heroService.deleteLocalStorage('user');
    this.router.navigate(['/sign-in']);
  }
}
