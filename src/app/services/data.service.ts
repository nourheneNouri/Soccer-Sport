import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';


@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }
  createDb() {

    // let players = [
    //   { id: 1, namePlayer: "Messi", numberPlayer: '1', equipePlayer: 'FCB', image: 'assets/images/img_3.jpg' },
    //   { id: 2, namePlayer: "Messi", numberPlayer: '10', equipePlayer: 'FCB', image: 'assets/images/img_2.jpg' },
    //   { id: 3, namePlayer: "Messi", numberPlayer: '8', equipePlayer: 'FCB', image: 'assets/images/img_2.jpg' },
    //   { id: 4, namePlayer: "Messi", numberPlayer: '18', equipePlayer: 'FCB', image: 'assets/images/img_2.jpg' },
    //   { id: 5, namePlayer: "Messi", numberPlayer: '5', equipePlayer: 'FCB', image: 'assets/images/img_2.jpg' },
    //   { id: 6, namePlayer: "Messi", numberPlayer: '9', equipePlayer: 'FCB', image: 'assets/images/img_2.jpg' },
    //   { id: 7, namePlayer: "Messi", numberPlayer: '3', equipePlayer: 'FCB', image: 'assets/images/img_2.jpg' },
    //   { id: 8, namePlayer: "Messi", numberPlayer: '4', equipePlayer: 'FCB', image: 'assets/images/img_2.jpg' },
    // ];
  
    // let allAdmin = [
    //   { id: 1, firstName: 'nourhen', lastName: 'nouri', email: 'aaa@gmail.com', tel: '21535118', adresse: 'tunis',password:"12345678" }, 
    //   { id: 2, firstName: 'aaa', lastName: 'nouri', email: 'aaa@gmail.com', tel: '21535118', adresse: 'tunis' },
    // ]
  
    
    return {   };

  }
}