import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-admin-players',
  templateUrl: './admin-players.component.html',
  styleUrls: ['./admin-players.component.css']
})
export class AdminPlayersComponent implements OnInit {
allPlayers:any;
  constructor(private playersService: PlayerService , private router: Router) { }

 ngOnInit(): void {
this.getAllPlayers()

}

getAllPlayers() {

  this.playersService.getAllPlayers().subscribe(
    data => this.allPlayers= data.players

  );
  }

  delete(id: string) {
    this.playersService.deletePlayer(id).subscribe(
      () => {
        console.log('Player deleted successfuly');
        this.getAllPlayers();


      })
  }
  edit(id: any) {
    this.router.navigate([`edit-player/${id}`]);

  }
  display(id: any) {
    this.router.navigate([`display-player/${id}`]);

  }




}
