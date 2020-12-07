import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  playerUrl='http://localhost:3000';
 
  constructor( private httpClient:HttpClient) {}

getAllPlayers(){
  return this.httpClient.get<{message:string, players:any}>(`${this.playerUrl}/allPlayers`);
}

deletePlayer(id:string){
  return this.httpClient.delete(`${this.playerUrl}/deletePlayers/${id}`);
}

addplayer( player:any ,image:File){
  
    let formData =new FormData();
    formData.append('name',player.name);
    formData.append('date',player.date);
    formData.append('image',image);
  

    return this.httpClient.post(`${this.playerUrl}/addplayer`, formData)
  }
  searchPlayer(term:string){
    return this.httpClient.get<{searchedPlayers:any}>(`${this.playerUrl}/api/search/${term}`)
    }
    editPlayer(player: any) {
      return this.httpClient.put(`${this.playerUrl}/editplayer/${player._id}`, player);
    }
    getPlayerbyId(id: any) {
      return this.httpClient.get<{ player: any }>(`${this.playerUrl}/displayPlayer/${id}`)
    }
}


