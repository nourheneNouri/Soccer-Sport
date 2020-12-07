import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() m:any;
  allAdmin: any;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getAllUsers()


  }

  getAllUsers() {

    this.userService.getAllUsers().subscribe(
      data => this.allAdmin = data.users

    );
  }
  displayId(id: number) {

    alert(id);
  }


  delete(id: string) {
    this.userService.deleteUser(id).subscribe(
      () => {
        console.log('User deleted successfuly');
        this.getAllUsers();

      }

    )
  }
  edit(id: any) {
    this.router.navigate([`/edit-user/${id}`]);

  }
  display(id: any) {
    this.router.navigate([`/display-user/${id}`]);

  }
}
