import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {


employees=[
{id:1,name:"Daniel",age:23},
{id:1,name:"Ellias",age:144},
{id:1,name:"belli",age:4},
{id:1,name:"Win",age:19},
]
constructor() { }

getEmployees=()=>{
   return this.employees
}
}
