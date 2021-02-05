import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private url = 'https://m-iti.herokuapp.com/';

  constructor(private http: HttpClient, private router: Router) {}

  getAllCourses(): any {
    return this.http.get<Course[]>(this.url + 'Courses/list');
  }

  addCourse(course: Course): any {
    // tslint:disable-next-line: deprecation
    return this.http.post<Course>(this.url + 'Courses/add', course).subscribe(
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

  getCourseById(id: number): any {
    return this.http.get<Course>(this.url + 'Courses/details/' + id);
  }

  deleteStudentFromCourse(courseId: number, studentId: number): any {
    console.log(studentId);
    this.http
      .post(this.url + 'Courses/removeStudent/' + courseId, {
        id: studentId,
      })
      // tslint:disable-next-line: deprecation
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

  // tslint:disable-next-line:typedef
  addStudentInCourse(courseId: number, studentId: number) {
    this.http
      .post(this.url + 'Courses/addStudent/' + courseId, {
        id: studentId,
      })
      // tslint:disable-next-line: deprecation
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

  updateCourse(id: number, course: Course): any {
    this.http
      .patch<Course>('http://localhost:5600/Courses/edit/' + id, course)
      // tslint:disable-next-line: deprecation
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

  deleteCourse(id: number): any {
    // tslint:disable-next-line: deprecation
    this.http.delete(this.url + 'Courses/delete/' + id).subscribe(
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
