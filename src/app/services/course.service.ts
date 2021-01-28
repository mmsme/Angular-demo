import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  getAllCourses() {
    return this.http.get<Course[]>('http://localhost:5600/Courses/list');
  }

  constructor(private http: HttpClient) {}
}
