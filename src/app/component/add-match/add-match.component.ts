import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})

export class AddMatchComponent implements OnInit {
  match: any = {};
  imagePreview:any;
  addMatchForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private matchService: MatchService ,
     private router: Router) { }

  ngOnInit(): void {
    this.addMatchForm = this.formBuilder.group({
      teamOne: [''],
      scoreOne: [''],
      teamTwo: [''],
      scoreTwo: [''],
      image:['']

    })
  }
  addMatch() {
    console.log('here my object', this.match)
    this.matchService.addmatch(this.match , this.addMatchForm.value.image).subscribe(() => {
      console.log('match added successfully');
      this.router.navigate(['admin']);
    })

  }

  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.addMatchForm.patchValue({ image: file });
    this.addMatchForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
    this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
    }
}

