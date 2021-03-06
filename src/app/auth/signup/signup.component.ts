import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

authForm:FormGroup;
  constructor() { }

  ngOnInit(): void {
        // Reactive Form
        this.authForm = new FormGroup({
          username : new FormControl(''),
          password: new FormControl(''),
          passwordConfirmation: new FormControl('')
        });
  }

}
