import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResultService } from 'src/app/services/result.service';
import { StaduimService } from 'src/app/services/staduim.service';

@Component({
  selector: 'app-display-stadium',
  templateUrl: './display-stadium.component.html',
  styleUrls: ['./display-stadium.component.css']
})
export class DisplayStadiumComponent implements OnInit {

  id: any;
  stadium: any;
  result: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private stadiumService: StaduimService,
    private resultService: ResultService
  ) { }

  ngOnInit(): void {
   this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.stadiumService.getStadiumbyId(this.id).subscribe(data => {this.stadium = data.stadium;});

  }

}