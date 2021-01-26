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
  department!: Department;

  constructor(
    private departmentService: DepartmentService,
    private ar: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.ar.params.subscribe((url) => {
      let id;
      id = url['id'];
      this.departmentService.getDepartment(id).subscribe(
        (department) => {
          console.log(department);
          this.department = department;
        },
        (err) => {
          console.error(err);
        }
      );
    });
  }

  updateDepartment() {
    this.departmentService.updateDepartment(
      this.department._id,
      this.department
    );
  }
}
