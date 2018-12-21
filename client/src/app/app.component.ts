import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'Player Board';
  public authUser : boolean = false;
  ngOnInit() {
    localStorage.setItem("auth",'false');
    // this.authUser = !localStorage.getItem("auth");
    this.authUser = sessionStorage.getItem("auth")=='true';
  }

}
