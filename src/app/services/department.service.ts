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

  addDepartment(department: Department) {
    return this.http
      .post<Department>('http://localhost:5600/Departments/add', department)
      .subscribe(
        (success) => {
          console.log('Operation Seccussfully');
          this.router.navigate(['/department']);
        },
        (error) => {
          alert('Error');
        }
      );
  }

  updateStudnet(id: number, data: any) {
    this.http
      .post<Department>('http://localhost:5600/Students/edit/' + id, data)
      .subscribe((a) => {
        console.log(a);
        this.router.navigateByUrl('/department');
      });
  }

  deleteByID(id: number) {
    this.http
      .get('http://localhost:5600/Departments/delete/' + id)
      .subscribe(() => {
        console.log('Operation Successfully');
      });
  }

  constructor(private http: HttpClient, private router: Router) {}
}
