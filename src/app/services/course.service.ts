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
  constructor(private http: HttpClient, private router: Router) {}
}
