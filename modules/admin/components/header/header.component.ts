import { Component } from '@angular/core';
import { AuthservService } from 'src/app/services/authserv.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
constructor(private auth:AuthservService){}

public logOut(){
  this.auth.logout()
}
}
