import { Component, OnInit } from '@angular/core';
import {PlayerService} from '../player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public userName : String;
public password : String;

  constructor(
    public playerService : PlayerService,
    public router : Router
  ) { }
  callAuthenticate(){
    console.log(this.userName,this.password);
    const creds = {username:this.userName,password:this.password}
    this.playerService.authUser(creds).subscribe(token =>{
      console.log(token)
      localStorage.setItem("auth", token['isAuthorized']);
      sessionStorage.setItem("auth", token['isAuthorized']);
      // if(token['isAuthorized']){
        if(sessionStorage.getItem("auth")){
        localStorage.setItem("authToken", token['token']);
        this.router.navigate(['/players']);
      }
      else{
        alert('Invalid Username / Password');
      }

    });
  }
  ngOnInit() {
    this.userName ='arjun';
    this.password ='arjun';
  }

}
