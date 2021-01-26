import { Component, OnInit } from '@angular/core';
import { Department } from '../models/department';
import { DepartmentService } from '../services/department.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css'],
})
export class AddDepartmentComponent implements OnInit {
  newDepartment: Department = new Department(0, '');

  constructor(private departmentService: DepartmentService) {}

  ngOnInit(): void {}

  addDepartment() {
    if (this.newDepartment._id == 0 || this.newDepartment.Name == '') {
      alert('Please Enter Valid Data');
    } else {
      this.departmentService.addDepartment(this.newDepartment);
      this.resetData();
    }
  }

  resetData() {
    this.newDepartment._id = 0;
    this.newDepartment.Name = '';
  }
}
