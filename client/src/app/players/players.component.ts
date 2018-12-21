import { Component, OnInit } from '@angular/core';
import {PlayerService} from '../player.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
  providers: [PlayerService]
})
export class PlayersComponent implements OnInit {
   players : any;
   player : any;
   formdata : any;
   first_name : String;
   last_name : String;


  constructor(
    private playerService: PlayerService,
    private router : Router,
   ) { }

  deletePlayer(id,index){
    this.playerService.deletePlayer(id).subscribe(player =>{
      this.players.splice(index,1)
    });
  }

  addNewPlayer(){
    console.log(this.player) 
    if(this.formdata.valid){
      this.playerService.addPlayer(this.player).subscribe(player =>{
        this.players.push(this.player)
        this.player = {};
      });
    }
  }

  logoutUser(){
    sessionStorage.setItem("auth", "false");
    this.router.navigate(['/login']);
  }

  ngOnInit() {
    if(sessionStorage.getItem("auth")==='false')
      this.logoutUser();
    this.player = {};
    this.playerService.getPlayers().subscribe(players =>{
      this.players = players;
    });

    this.formdata = new FormGroup({
      id: new FormControl('',[Validators.required]),
      fname: new FormControl('',[Validators.required]),
      lname: new FormControl('',[Validators.required]),
      role: new FormControl('',[Validators.required]),
   });
  //  setTimeout(()=> {
  //   console.log("session expired.. logging out")
  //   this.logoutUser();
  //  },60000)
  }
  

}
