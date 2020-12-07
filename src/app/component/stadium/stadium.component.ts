import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Router } from '@angular/router';
import { StaduimService } from 'src/app/services/staduim.service';

@Component({
  selector: 'app-stadium',
  templateUrl: './stadium.component.html',
  styleUrls: ['./stadium.component.css']
})
export class StadiumComponent implements OnInit {

  @Input() s:any;
  @Output() newStadiums: EventEmitter<any> = new EventEmitter();
  constructor( private stadiumService : StaduimService ,
    private router : Router) { }

  ngOnInit(): void {
  }

  deleteStadium(id: string) {
    this.stadiumService.deletestadiums(id).subscribe(
      () => {
        console.log('stadium deleted successfuly');
        this.stadiumService.getAllstadiums().subscribe(
          data => {
            this.newStadiums.emit(data.stadiums);
          }
        )
      })
  }
  edit(id: any) {
    this.router.navigate([`edit-stadium/${id}`]);

  }
  display(id: any) {
    this.router.navigate([`display-stadium/${id}`]);

  }

}
