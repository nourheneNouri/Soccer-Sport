import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userUrl = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) { }
  getAllUsers() {
    return this.httpClient.get<{ message: string, users: any }>(`${this.userUrl}/allAdmin`);
  }

  deleteUser(id: string) {
    return this.httpClient.delete(`${this.userUrl}/deleteUser/${id}`);
  }

  addUser(user: any, image: File) {

    let formData = new FormData();
    formData.append('firstName', user.firstName);
    formData.append('lastName', user.lastName);
    formData.append('email', user.email);
    formData.append('tel', user.tel);
    formData.append('pwd', user.pwd);
    formData.append('confirmpwd', user.confirmpwd);
    formData.append('image', image);


    return this.httpClient.post(`${this.userUrl}/addUser`, formData)
  }

  login(user: any) {
    return this.httpClient.post<{user :any}>(`${this.userUrl}/login`, user)
  }
  editUser(user: any) {
    return this.httpClient.put(`${this.userUrl}/editUser/${user._id}`, user);
  }
  getUserbyId(id: any) {
    return this.httpClient.get<{ user: any }>(`${this.userUrl}/displayUser/${id}`);


  }
  searchUSer(term: any) {
    return this.httpClient.get<{ searchedUser: any }>(`${this.userUrl}/api/search/${term}`);

  }

}





