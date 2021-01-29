import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  Studnets: Student[] = [];

  getAllStudents() {
    return this.http.get<Student[]>('http://localhost:5600/Students/list');
  }

  addStudnet(studnet: Student) {
    this.http
      .post<Student>('http://localhost:5600/Students/add', studnet)
      .subscribe(
        (success) => {
          console.log('Operation Seccussfully:', success);
          this.router.navigate(['/students']);
        },
        (error) => {
          console.log('Error:', error);
          alert('Failed');
        }
      );
  }

  getStudent(id: number) {
    return this.http.get<Student>(
      'http://localhost:5600/Students/details/' + id
    );
  }

  updateStudnet(id: number, data: any) {
    this.http
      .post<Student>('http://localhost:5600/Students/edit/' + id, data)
      .subscribe((a) => {
        console.log(a);
        this.router.navigateByUrl('/students');
      });
  }

  deleteByID(id: number) {
    this.http.get('http://localhost:5600/Students/delete/' + id).subscribe(
      (success) => {
        console.log('Operation Successfully', success);
        window.location.reload();
      },
      (error) => {
        console.log(error);
        alert('Failed');
      }
    );
  }

  constructor(private http: HttpClient, private router: Router) {}
}
