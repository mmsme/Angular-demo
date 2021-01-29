import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../models/course';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-enroll-student',
  templateUrl: './enroll-student.component.html',
  styleUrls: ['./enroll-student.component.css'],
})
export class EnrollStudentComponent implements OnInit {
  public selectedCourse: Course = new Course(0, '', '', []);
  p!: number;
  itemsCount: number = 5;
  public student = 0;

  constructor(
    private courseService: CourseService,
    private ar: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.ar.params.subscribe((url) => {
      this.courseService.getCourseById(url['id']).subscribe((course) => {
        this.selectedCourse = course;
      });
    });
  }

  enrollStudent(id: number) {
    if (id != 0) {
      this.courseService.addStudentInCourse(this.selectedCourse._id, id);
      return;
    }

    alert('Enter Student ID');
  }
}
