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
  itemsCount: number = 5;
  selectedCourse: Course = new Course(0, '', '', []);

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courseService.getAllCourses().subscribe((data) => {
      this.coursesList = data;
      console.log(this.coursesList);
    }),
      () => {
        console.log('Falied To Get Data');
      },
      () => {
        console.log('Complete ya 3asel');
      };
  }

  deleteCourse(id: number) {
    this.courseService.deleteCourse(id);
  }
}
