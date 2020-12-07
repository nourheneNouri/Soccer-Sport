import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
player : any={};
imagePreview:any;
addPalyerForm :FormGroup;
  constructor( private formbuilder: FormBuilder , private playerService : PlayerService ,
    private router :Router) { }

  ngOnInit(): void {
    this.addPalyerForm = this.formbuilder.group({
      name:[''],
      date:[''],
      image:['']
    }

    )
  

    
  }
  addPlayer(){
    console.log('here my object', this.player)
  this.playerService.addplayer(this.player ,this.addPalyerForm.value.image).subscribe(
    ()=> {console.log('match added successfully');
    this.router.navigate(['admin']);} 
  
  )}
  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.addPalyerForm.patchValue({ image: file });
    this.addPalyerForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
    this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
    }
  

}
