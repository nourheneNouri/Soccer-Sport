import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user: any = {};
  addUserForm: FormGroup;
  id:any;

  constructor(private formBuilder: FormBuilder, private userService: UserService,
    private router: Router , private activated:ActivatedRoute) { }    

  ngOnInit(): void {
    //le module activtedRoute permet de sanpachoter (capturer)
    //l'URL active et mapper pour faire retourner le paramétre ID 
    this.id =this.activated.snapshot.paramMap.get('id');
    this.userService.getUserbyId(this.id).subscribe(
      data => {this.user = data.user ;}
    )
    this.addUserForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      tel: ['']
    
    })
  }
  editUser(){
    this.userService.editUser(this.user).subscribe(
      () => {
        this.router.navigate(['admin']);
      }
    )

  }
}