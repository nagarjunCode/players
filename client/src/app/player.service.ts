import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http:HttpClient) { }

  getPlayers(){
    return this.http.get('http://localhost:3000/api/players');
  }

  addPlayer(newPlayer){
    var headers = new HttpHeaders();
    let token = localStorage.getItem("authToken");
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    headers = headers.set('Authorization', `${token}`);
    // headers.append('Authorization',`Bearer ${token}`);
    // headers = {
    //   'content-type': 'application/json; charset=utf-8',
    //   "Authorization" : `Bearer ${token}`
    // }
    console.log(headers)
    return this.http.post('http://localhost:3000/api/player',newPlayer,{headers:headers});
  }

  authUser(creds){
    var headers = new HttpHeaders();
    headers.append('Content-Type','application-json');
    console.log('creds',creds)
    return this.http.post('http://localhost:3000/api/auth',creds,{headers:headers});
  }

  deletePlayer(id){
    return this.http.delete('http://localhost:3000/api/player/'+id);
  }






}
