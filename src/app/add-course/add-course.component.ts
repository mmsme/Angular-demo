import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css'],
})
export class AddCourseComponent implements OnInit {
  newCourse: Course = new Course(0, '', '', []);

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {}

  addNewCourse(): void {
    if (
      this.newCourse._id === 0 ||
      this.newCourse.Name === '' ||
      this.newCourse.Instructor === ''
    ) {
      alert('Please Enter Data');
    } else {
      this.courseService.addCourse(this.newCourse);
      this.resetCourse();
    }
  }

  resetCourse(): void {
    this.newCourse._id = 0;
    this.newCourse.Name = '';
    this.newCourse.Instructor = '';
  }
}
