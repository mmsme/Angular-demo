import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../models/course';
import { Student } from '../models/student';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css'],
})
export class UpdateCourseComponent implements OnInit {
  public selectedCourse: Course = new Course(0, '', '', []);
  p!: number;
  itemsCount: number = 5;
  public students!: any;
  public student!: Student;

  constructor(
    private courseService: CourseService,
    private ar: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.ar.params.subscribe((url) => {
      this.courseService.getCourseById(url['id']).subscribe((course) => {
        this.selectedCourse = course;
        this.students = course.list;
      });
    });
  }

  unenrollStudent(id: number) {
    this.courseService.deleteStudentFromCourse(this.selectedCourse._id, id);
  }

  updateCourse() {
    this.courseService.updateCourse(
      this.selectedCourse._id,
      this.selectedCourse
    );
  }
}
