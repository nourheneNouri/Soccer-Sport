import { Component, Input, OnInit } from '@angular/core';
import { ResultService } from 'src/app/services/result.service';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {

  //Entrée nommée matchInput
  @Input() matchInput:any;
  result:any;
  constructor(private resultMatch: ResultService) { }

  ngOnInit(): void {
// this.resultMatch.getResultbyId(this.matchInput.idR).subscribe(
// data=>{ this.result= data ; console.log('this is my ')}
// )

 }
resultScore(a:number,b:number){


  if(a>b){
    return ['win','green'];
  }else if (a==b){
    return ['Draw','blue'];
  }else {
  return ['loss','red']
  }

  }



}
