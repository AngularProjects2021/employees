import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employeeList:any;
  constructor(private http:HttpClient) { }


  //get Employee 
  getEmployee() {
    // return API data
       //return this.http.get('http://dummy.restapiexample.com/api/v1/employees');

    //return static data
        return this.employeeList = [    {
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
            }]
  }


  //create employee 
      // createEmployee(employeee: Employee) {
      //   return this.http.post(`http://dummy.restapiexample.com/api/v1/create`,employeee);
      // }
  //delete employee
      // public deleteEmployee(id: number){
      //   return this.http.delete(`http://dummy.restapiexample.com/api/v1/delete/${id}`);
      // }
}
