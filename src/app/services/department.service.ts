import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from '../models/department';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  private url = 'https://m-iti.herokuapp.com/';

  constructor(private http: HttpClient, private router: Router) {}

  getAllDepartment(): any {
    return this.http.get<Department[]>(this.url + 'Departments/list');
  }

  addDepartment(department: Department): any {
    this.http
      .post<Department>(this.url + 'Departments/add', department)
      // tslint:disable-next-line: deprecation
      .subscribe(
        (success) => {
          console.log('Operation Seccussfully', success);
          this.router.navigate(['/department']);
        },
        (error) => {
          console.log('Error:', error);
          alert('Failed');
        }
      );
  }

  updateDepartment(id: number, data: any): any {
    console.log(data);
    this.http
      .post<Department>(this.url + 'Departments/edit/' + id, data)
      // tslint:disable-next-line: deprecation
      .subscribe((a) => {
        console.log(a);
        this.router.navigateByUrl('/department');
      });
  }

  deleteByID(id: number): any {
    // tslint:disable-next-line: deprecation
    this.http.get(this.url + 'Departments/delete/' + id).subscribe(() => {
      console.log('Operation Successfully');
      window.location.reload();
    });
  }

  getDepartment(id: number): any {
    return this.http.get<Department>(this.url + 'Departments/details/' + id);
  }
}
