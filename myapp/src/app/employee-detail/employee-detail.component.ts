import { Component } from '@angular/core';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css'],
})
export class EmployeeDetailComponent {
  // employees=[
  //   {id:1,name:"Daniel",age:23},
  //   {id:1,name:"Ellias",age:144},
  //   {id:1,name:"belli",age:4},
  //   {id:1,name:"Win",age:19},
  //   ]
  employees:any = [];
  constructor(private _employeeService: EmployeesService) {}
  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
  }
}
