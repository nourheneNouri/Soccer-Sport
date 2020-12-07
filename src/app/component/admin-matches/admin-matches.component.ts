import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-admin-matches',
  templateUrl: './admin-matches.component.html',
  styleUrls: ['./admin-matches.component.css']
})
export class AdminMatchesComponent implements OnInit {
  allMatches: any;

  constructor(private matchService: MatchService,
    private router: Router) { }

  ngOnInit(): void {


 

    
   
  }


}
