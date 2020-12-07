import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaduimService {

  stadiumsUrl = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) { }

  getAllstadiums() {
    return this.httpClient.get<{ message: string, stadiums: any }>(`${this.stadiumsUrl}/allStadiums`);
  }
  deletestadiums(id: string) {
    return this.httpClient.delete(`${this.stadiumsUrl}/deleteStadium/${id}`);
  }
  addstadium(stadium: any) {
    return this.httpClient.post(`${this.stadiumsUrl}/addStadium`, stadium)
  }
  editStadium(stadium: any) {
    return this.httpClient.put(`${this.stadiumsUrl}/editStadium/${stadium._id}`, stadium);
  }
  getStadiumbyId(id: any) {
    return this.httpClient.get<{ stadium: any }>(`${this.stadiumsUrl}/displayStadium/${id}`)
  }
}
