import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
resultUrl = 'api/result';
  constructor( private httpClient: HttpClient ) { }
   
  getResultbyId(id:any){
    return this.httpClient.get(`${this.resultUrl}\ ${id}`)
  }
}
