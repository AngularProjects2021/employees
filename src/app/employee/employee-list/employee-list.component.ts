import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../../employee.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'
import { EmployeeCreateComponent } from '../employee-create/employee-create.component';

export interface PeriodicElement {
  employee_name: string;
  id: number;
  employee_salary: number;
  employee_age: number;
}


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent implements OnInit {
  em_data:PeriodicElement[] = [];
  displayedColumns: string[] = ['position', 'employee_name', 'employee_salary', 'employee_age','deleteEmployee'];
  //dataSource = ELEMENT_DATA;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service:EmployeeService,public dialog: MatDialog) { }

  ngOnInit(): void {
    //subscribe http response
        //  this.em.getEmployee().subscribe((response:any) => {
        //   let data = this.em.getEmployee();
        //   this.em_data = response;
        //    console.log(response)
        //  });

        //For Static Data
          let data = this.service.getEmployee();
          this.em_data = data;
          //this.dataSource.sort = this.sort;
          //this.dataSource.paginator = this.paginator
  }

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.width = "100%"
    this.dialog.open(EmployeeCreateComponent,dialogConfig);
  }
  closeDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
  }
  onDelete(name) {
    //Delete employee
      // this.service.deleteEmployee(1).subscribe((res)=>{
      //   console.log("Deleted a employee");
      //   });
    alert(`${name} Do you want to delete id `)
    // this.em_data.remove(id)
    //console.log(id)
  }
 
}
