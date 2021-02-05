import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Department } from '../models/department';
import { DepartmentService } from '../services/department.service';

@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.css'],
})
export class EditDepartmentComponent implements OnInit {
  department: Department = new Department(0, '');

  constructor(
    private departmentService: DepartmentService,
    private ar: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // tslint:disable-next-line: deprecation
    this.ar.params.subscribe((url) => {
      let id;
      id = url.id;
      this.departmentService.getDepartment(id).subscribe(
        (department: Department) => {
          console.log(department);
          this.department = department;
        },
        (err: any) => {
          console.error(err);
        }
      );
    });
  }

  updateDepartment(): void {
    this.departmentService.updateDepartment(
      this.department._id,
      this.department
    );
  }
}
