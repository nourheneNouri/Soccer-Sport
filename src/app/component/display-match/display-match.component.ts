import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';
import { ResultService } from 'src/app/services/result.service';

@Component({
  selector: 'app-display-match',
  templateUrl: './display-match.component.html',
  styleUrls: ['./display-match.component.css']
})
export class DisplayMatchComponent implements OnInit {
  id: any;
  match: any;
  result: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private matchService: MatchService,
    private resultService: ResultService
  ) { }

  ngOnInit(): void {
   this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.matchService.getMatchbyId(this.id).subscribe(
      data => {this.match = data.match;
     
    }
    );

  }

}
