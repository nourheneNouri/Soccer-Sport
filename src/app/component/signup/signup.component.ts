import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { MustMatch } from 'src/app/validators/confirmPwd';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  imagePreview: any;
  constructor(private formBuilder: FormBuilder,
    private signupService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      firstName: ['', [Validators.minLength(5), Validators.required]],
      lastName: ['', Validators.minLength(6)],
      email: ['', [Validators.email, Validators.required]],
      tel: ['', Validators.minLength(8)],
      pwd: ['', [Validators.minLength(8), Validators.required]],
      confirmPwd: ['', Validators.required],
      image: ['']
    },
      {
        validator: MustMatch('pwd', 'confirmPwd')
      })
  }


  signup(user: any) {
    console.log('here my object', user)
    this.signupService.addUser(user, this.signupForm.value.image).subscribe(
      () => {
        console.log('user added successfuly');
        this.router.navigate(['admin']);

      }
    )
  }

  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.signupForm.patchValue({ image: file });
    this.signupForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
  }


}
