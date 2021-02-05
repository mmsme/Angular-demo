import { Component, OnInit } from '@angular/core';
import { Department } from '../models/department';
import { DepartmentService } from '../services/department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css'],
})
export class DepartmentComponent implements OnInit {
  departmentList: Department[] = [];
  p!: number;
  itemsCount = 5;
  department: Department = new Department(0, '');

  constructor(private departmentService: DepartmentService) {}

  ngOnInit(): void {
    this.departmentService.getAllDepartment().subscribe((d: Department[]) => {
      this.departmentList = d;
    });
  }

  deleteDepartment(department: Department): void {
    this.departmentService.deleteByID(department._id);
  }
}
