import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';
import { StaduimService } from 'src/app/services/staduim.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {
  allMatches: any;
  allStadiums:any;
  constructor(
    private matchService: MatchService,
    private stadimService: StaduimService,
    private router: Router) { }

  ngOnInit(): void {
    this.getMatches();
    this.getSatdiums();

  }
  //get all matches
  getMatches() {

    this.matchService.getAllMatches().subscribe(
      data => this.allMatches = data.matches


    );

  }

  getSatdiums() {

    this.stadimService.getAllstadiums().subscribe(
      data => this.allStadiums = data.stadiums


    );

  }
  
  delete(id: string) {
    this.matchService.deleteMatch(id).subscribe(
      () => {
        console.log('match deleted successfuly');
        this.getMatches();


      })
  }

 updateStadiums(stadiums:any){
   this.allStadiums = stadiums;
 }
 
  edit(id: any) {
    this.router.navigate([`edit-match/${id}`]);

  }
  display(id: any) {
    this.router.navigate([`display-match/${id}`]);

  }
  
}
