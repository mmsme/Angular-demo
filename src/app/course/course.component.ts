import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  coursesList: Course[] = [];
  p!: number;
  itemsCount = 5;
  selectedCourse: Course = new Course(0, '', '', []);

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courseService.getAllCourses().subscribe((data: Course[]) => {
      this.coursesList = data;
      console.log(this.coursesList);
    });
  }

  deleteCourse(id: number): void {
    this.courseService.deleteCourse(id);
  }
}
