import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Router } from '@angular/router';
import { AuthservService } from 'src/app/services/authserv.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
constructor(private serv:AuthservService,private router:Router){}

loginForm=new FormGroup({
  username:new FormControl(''),
  password:new FormControl('')
});
public onSubmit(){
if(this.loginForm.valid){
  this.serv.login(this.loginForm.value).subscribe((res)=>{
    this.router.navigate(['admin']);
  },  
  (err:Error)=>{
    alert(err.message);
  }
  )
}
}
ngOnInit(): void {
  if(this.serv.isLoggedIn()){
    this.router.navigate(['admin'])
  }
}
}
