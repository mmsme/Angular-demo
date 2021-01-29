import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  getAllCourses() {
    return this.http.get<Course[]>('http://localhost:5600/Courses/list');
  }

  addCourse(course: Course) {
    return this.http
      .post<Course>('http://localhost:5600/Courses/add', course)
      .subscribe(
        (success) => {
          console.log('Operation Seccussfully', success);
          this.router.navigate(['/course']);
        },
        (error) => {
          console.log('Error:', error);
          alert('Failed');
        }
      );
  }

  getCourseById(id: number) {
    return this.http.get<Course>('http://localhost:5600/Courses/details/' + id);
  }

  deleteStudentFromCourse(courseId: number, studentId: number) {
    console.log(studentId);
    this.http
      .post('http://localhost:5600/Courses/removeStudent/' + courseId, {
        id: studentId,
      })
      .subscribe(
        (success) => {
          console.log(success);
          window.location.reload();
        },
        (error) => {
          console.log(error);
          alert('faild');
        }
      );
  }

  addStudentInCourse(courseId: number, studentId: number) {
    this.http
      .post('http://localhost:5600/Courses/addStudent/' + courseId, {
        id: studentId,
      })
      .subscribe(
        (success) => {
          console.log(success);
          alert('success');
        },
        (error) => {
          console.log(error);
          alert('faild');
        }
      );
  }

  updateCourse(id: number, course: Course) {
    this.http
      .patch<Course>('http://localhost:5600/Courses/edit/' + id, course)
      .subscribe(
        (seccuss) => {
          console.log(seccuss);
          this.router.navigateByUrl('/course/details/' + id);
        },
        (error) => {
          console.log(error);
          alert('faild');
        }
      );
  }

  deleteCourse(id: number) {
    this.http.delete('http://localhost:5600/Courses/delete/' + id).subscribe(
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
