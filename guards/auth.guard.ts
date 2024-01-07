import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,CanActivate,CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthservService } from '../services/authserv.service';
@Injectable({
  providedIn:'root'
})
// export const authGuard: CanActivateFn = (route, state) => {
  
//   return false;
export class authGuard  implements CanActivate{
  constructor(private router:Router, private auth: AuthservService) {}
canActivate(
  route:ActivatedRouteSnapshot,
  state:RouterStateSnapshot
):boolean{
  if (!this.auth.isLoggedIn()) {
    this.router.navigate(['/login']);
    return false;
  }
  return this.auth.isLoggedIn();
}
}

