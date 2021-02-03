import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'
import { Router } from '@angular/router';
import { EmployeeService } from '../../employee.service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  authForm:FormGroup;
  constructor(private service:EmployeeService, private router:Router) { }

  ngOnInit(): void {
        // Reactive Form
        this.authForm = new FormGroup({
          name : new FormControl('',Validators.required),
          salary: new FormControl('',Validators.required),
          age: new FormControl('',Validators.required)
        });
  }
  onClose() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    window.location.reload(); 
  }
  
  onSubmit() {
    //Employee Creation response
        // this.service.createCustomer(employee).subscribe((res)=>{
        //   console.log("Created a customer");
        //   });
    alert('submitted');
    this.router.navigateByUrl('/employee');
    
  }
}
 