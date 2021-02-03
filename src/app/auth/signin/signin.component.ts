import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  authForm:FormGroup;
  constructor(private router:Router) { }

  ngOnInit(): void {
    // Reactive Form
    this.authForm = new FormGroup({
      email : new FormControl('',Validators.email),
      password: new FormControl('',[Validators.required, Validators.minLength(3)])
    });
  }
  

  get f(){
    return this.authForm.controls;
  }

  onSubmit(){
    alert('submitted');
    this.router.navigateByUrl('/employee');
  }
}
