import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  firstName : string;
  lastName: string;
actualDate: Date ;
  constructor(private router:Router) { }


  ngOnInit(): void {
    this.actualDate =new Date();
    this.firstName = localStorage.getItem('connectedUserFName');
    this.lastName = localStorage.getItem('connectedUserNLame');

  }

  goToContact(){
    this.router.navigate(['contact']);
  }
  
  logout(){
    localStorage.removeItem('connectedUserFName');
    localStorage.removeItem('connectedUserNLame');
    location.reload();
  }
}
