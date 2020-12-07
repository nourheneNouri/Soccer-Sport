import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  matchesUrl = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) { }

  getAllMatches() {
    return this.httpClient.get<{ message: string, matches: any }>(`${this.matchesUrl}/allMatches`);
  }
  deleteMatch(id: string) {
    return this.httpClient.delete(`${this.matchesUrl}/deleteMatch/${id}`);
  }
  addmatch(match: any, image: File) {
    let formData = new FormData();
    formData.append('teamOne', match.teamOne);
    formData.append('teamTwo', match.teamTwo);
    formData.append('scoreOne', match.scoreOne);
    formData.append('scoreTwo', match.scoreTwo);
    formData.append('image', image);
    return this.httpClient.post(`${this.matchesUrl}/addmatch`, formData)
  }
  editMatch(match: any) {
    return this.httpClient.put(`${this.matchesUrl}/editMatch/${match._id}`, match);
  }
  getMatchbyId(id: any) {
    return this.httpClient.get<{ match: any }>(`${this.matchesUrl}/displayMatch/${id}`)
  }
  searchMatch(term: any) {
    return this.httpClient.get<{ searchedMatches: any }>(`${this.matchesUrl}/api/search/${term}`)


  }

}