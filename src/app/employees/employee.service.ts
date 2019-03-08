import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable()
export class EmployeeService{
private listEmployees: Employee[]=[
    {
        id:1,
      name:'Mark',
      gender:'Male',
      ContactPreference: 'email',
      email:'aghsdvg@hhagjhai',
      dateOfBirth:new Date('10/25/1988'),
      department:'1',
      isActive:true,
      photoPath:"assets/images/Pinguim_Crystal_2000.png"
      },
      {
      id:2,
      name:'Mary',
      gender:'Female',
      ContactPreference:'phone',
      phoneNumber:7623268347,
      dateOfBirth:new Date('11/12/1888'),
      department:'3',
      isActive:true,
      photoPath:"assets/images/TQ.png"
      },
      {
        id:3,
        name:'John',
        gender:'Male',
        ContactPreference:'phone',
        phoneNumber:7632893268347,
        dateOfBirth:new Date('11/12/1888'),
        department:'3',
        isActive:false,
        photoPath:"assets/images/ss.png"
        },

];
getEmployees():Employee[]{
    return this.listEmployees;
}

getEmployee(id: number):Employee{
    return this.listEmployees.find(e => e.id=== id);
}
save(employee: Employee){
    this.listEmployees.push(employee)
}
}