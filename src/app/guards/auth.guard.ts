import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    let storedUsers: string | null = null;

    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      storedUsers = localStorage.getItem('user');
    }

    const isSignInOrSignUp =
      route.routeConfig?.path == 'sign-in' ||
      route.routeConfig?.path == 'sign-up';

    if (storedUsers) {
      if (route.routeConfig?.path === 'home') {
        return true;
      }
    } else {
      if (route.routeConfig?.path === 'home') {
        this.router.navigate(['/sign-in']);
        return false;
      }
    }

    return isSignInOrSignUp;
  }
}
