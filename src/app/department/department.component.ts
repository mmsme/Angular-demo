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
  itemsCount: number = 5;

  constructor(private departmentService: DepartmentService) {}

  ngOnInit(): void {
    this.departmentService.getAllDepartment().subscribe((d) => {
      this.departmentList = d;
    }),
      () => {
        console.log('Falied To Get Data');
      },
      () => {
        console.log('Complete ya 3asel');
      };
  }
}
