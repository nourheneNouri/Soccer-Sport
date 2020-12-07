import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {
  player: any = {};
  editPalyerForm: FormGroup;
  id:any;

  constructor(private formBuilder: FormBuilder, private playerService: PlayerService,
    private router: Router , private activated:ActivatedRoute) { }    

  ngOnInit(): void {
    //le module activtedRoute permet de sanpachoter (capturer)
    //l'URL active et mapper pour faire retourner le paramétre ID 
    this.id =this.activated.snapshot.paramMap.get('id');
    this.playerService.getPlayerbyId(this.id).subscribe(
      data => {this.player = data.player;}
    )
    this.editPalyerForm = this.formBuilder.group({
      name: [''],
    date: [''],
     

    
    })
  }
  editPlayer(){
    this.playerService.editPlayer(this.player).subscribe(
      () => {
        this.router.navigate(['admin']);
      }
    )

  }
}

