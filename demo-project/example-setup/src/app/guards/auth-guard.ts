import { Injectable }     from '@angular/core';
import { CanActivate, Router }    from '@angular/router';
import { AuthService } from '@services/core/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    const canRoute = !!this.authService.authState;
    if (canRoute) {
        return true;
    } else {
        this.router.navigate(['/']);
        return false;
    }
  }
}