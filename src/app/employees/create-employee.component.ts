import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  @ViewChild('employeeForm') public createEmployeeForm: NgForm;
  previewPhoto=false;
  employee:Employee={
    id:null,
    name:null,
    gender:null,
    email:'',
    phoneNumber:null,
    ContactPreference:null,
    dateOfBirth:null,
    department:'select',
    isActive:null,
    photoPath:null,

  };
  departments:Department[]=[
    {id: 1, name:'Help Desk'},
    {id: 2, name:'ITIS'},
    {id: 3, name:'Facilities & Administration'},
    {id: 4, name:'Ascent Payroll'},
    {id: 5, name:'HR'}
  ];

  constructor(private _employeeService:EmployeeService,
  private _router: Router) { }
    togglePhotoPreview(){
      this.previewPhoto=!this.previewPhoto;
    }
  

  ngOnInit() {
  }
saveEmployee(): void{
 const newEmployee: Employee= Object.assign({}, this.employee);
 this._employeeService.save(newEmployee);
this.createEmployeeForm.reset();

 this._router.navigate(['list'])
}
}


