import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../models/course';
import { Student } from '../models/student';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css'],
})
export class CourseDetailsComponent implements OnInit {
  public selectedCourse: Course = new Course(0, '', '', []);
  p!: number;
  itemsCount: number = 5;
  public student!: Student;

  constructor(
    private courseService: CourseService,
    private ar: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.ar.params.subscribe((url) => {
      this.courseService.getCourseById(url['id']).subscribe((course) => {
        this.selectedCourse = course;
        console.table(this.selectedCourse.list);
      });
    });
  }

  print(data: any) {
    console.log(data);
  }

  unenrollStudent(id: number) {
    this.courseService.deleteStudentFromCourse(this.selectedCourse._id, id);
  }
}
