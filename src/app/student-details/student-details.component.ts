import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../models/student';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css'],
})
export class StudentDetailsComponent implements OnInit {
  student!: Student;
  constructor(
    private studentService: StudentService,
    private ar: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.ar.params.subscribe((url) => {
      let id;
      id = url['id'];
      this.studentService.getStudent(id).subscribe(
        (student) => {
          this.student = student;
        },
        (err) => {
          console.log(err);
        }
      );
    });
  }
}
