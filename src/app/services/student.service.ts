import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  Studnets: Student[] = [];
  private url = 'https://m-iti.herokuapp.com/';

  constructor(private http: HttpClient, private router: Router) {}

  getAllStudents() {
    return this.http.get<Student[]>(this.url + 'Students/list');
  }

  addStudnet(studnet: Student) {
    this.http.post<Student>(this.url + 'Students/add', studnet).subscribe(
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
    return this.http.get<Student>(this.url + 'Students/details/' + id);
  }

  updateStudnet(id: number, data: any) {
    this.http
      .post<Student>(this.url + 'Students/edit/' + id, data)
      .subscribe((a) => {
        console.log(a);
        this.router.navigateByUrl('/students');
      });
  }

  deleteByID(id: number) {
    this.http.get(this.url + 'Students/delete/' + id).subscribe(
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
}
