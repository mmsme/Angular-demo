import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from '../models/department';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  getAllDepartment() {
    return this.http.get<Department[]>(
      'http://localhost:5600/Departments/list'
    );
  }

  constructor(private http: HttpClient, private router: Router) {}
}
