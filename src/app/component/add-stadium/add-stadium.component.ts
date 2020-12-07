import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StaduimService } from 'src/app/services/staduim.service';

@Component({
  selector: 'app-add-stadium',
  templateUrl: './add-stadium.component.html',
  styleUrls: ['./add-stadium.component.css']
})
export class AddStadiumComponent implements OnInit {
  stadium : any={};
 
  addStadiumForm :FormGroup;
    constructor( private formbuilder: FormBuilder , private stadiumService : StaduimService ,
      private router :Router) { }
  
    ngOnInit(): void {
      this.addStadiumForm = this.formbuilder.group({
        name:[''],
        capacity:[''],
        country:['']
      }
  
      )
    
  
      
    }
    addStadium(){
      console.log('here my object', this.stadium)
    this.stadiumService.addstadium(this.stadium).subscribe(
      ()=> {console.log('match added successfully');
      this.router.navigate(['admin']);} 
    
    )}
  
    
  
  }
  
