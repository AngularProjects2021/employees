import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-employee-home',
  templateUrl: './employee-home.component.html',
  styleUrls: ['./employee-home.component.css']
})
export class EmployeeHomeComponent implements AfterViewInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { 
  
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    
  }
 

}

  export interface PeriodicElement {
    employee_name: string;
    id: number;
    employee_salary: number;
    employee_age: number;
  }
  
  const ELEMENT_DATA: PeriodicElement[] = [

    {
      id:1,
      employee_name:'Tiger Nixon',
      employee_salary:320800,
      employee_age:61,
   },
   {
      id:2,
      employee_name:'Garrett Winters',
      employee_salary:170750,
      employee_age:63,
   },
   {
      id:3,
      employee_name:'Ashton Cox',
      employee_salary:86000,
      employee_age:66,
   },
   {
      id:4,
      employee_name:'Cedric Kelly',
      employee_salary:433060,
      employee_age:22,
   },
   {
      id:5,
      employee_name:'Airi Satou',
      employee_salary:162700,
      employee_age:33,
   }
  ];

