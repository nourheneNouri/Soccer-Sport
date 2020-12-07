import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StaduimService } from 'src/app/services/staduim.service';

@Component({
  selector: 'app-edit-stadium',
  templateUrl: './edit-stadium.component.html',
  styleUrls: ['./edit-stadium.component.css']
})
export class EditStadiumComponent implements OnInit {
  stadium: any = {};
  edtiStadiumForm: FormGroup;
  id:any;

  constructor(private formBuilder: FormBuilder, private stadiumService: StaduimService,
    private router: Router , private activated:ActivatedRoute) { }    

  ngOnInit(): void {
    //le module activtedRoute permet de sanpachoter (capturer)
    //l'URL active et mapper pour faire retourner le paramétre ID 
    this.id =this.activated.snapshot.paramMap.get('id');
    this.stadiumService.getStadiumbyId(this.id).subscribe(
      data => {this.stadium = data.stadium;}
    )
    this.edtiStadiumForm = this.formBuilder.group({
      name: [''],
    capacity: [''],
    country:['']
     

    
    })
  }
  editStadium(){
    this.stadiumService.editStadium(this.stadium).subscribe(
      () => {
        this.router.navigate(['admin']);
      }
    )

  }
}

