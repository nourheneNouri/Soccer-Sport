import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';
import { PlayerService } from 'src/app/services/player.service';
import { ResultService } from 'src/app/services/result.service';

@Component({
  selector: 'app-display-player',
  templateUrl: './display-player.component.html',
  styleUrls: ['./display-player.component.css']
})
export class DisplayPlayerComponent implements OnInit {
  id: any;
  player: any;
  result: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private playerService: PlayerService,
    private resultService: ResultService
  ) { }

  ngOnInit(): void {
   this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.playerService.getPlayerbyId(this.id).subscribe(data => {this.player = data.player;});

  }

}