import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor() {}

  getUsers() {
    const storedUsers = localStorage.getItem('users');
    return storedUsers;
  }

  setInStorage(name: string, stringify: string): void {
    localStorage.setItem(name, stringify);
  }
  deleteLocalStorage(name: string) {
    localStorage.removeItem(name);
  }
}
