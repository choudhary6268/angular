import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent implements OnInit {

  public loginForm: any;

  constructor(private formBuilder: FormBuilder ) {

  }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    this.loginForm = this.formBuilder.group({
      firstName: [null, Validators.required],
      middleName: null,
      lastName: [null, Validators.required],
      username: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  public signUpUser() {
    // Call Login API
  }


}
