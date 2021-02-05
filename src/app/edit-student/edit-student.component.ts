import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../models/student';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css'],
})
export class EditStudentComponent implements OnInit {
  student!: Student;

  constructor(
    private studentService: StudentService,
    private ar: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // tslint:disable-next-line: deprecation
    this.ar.params.subscribe((url) => {
      this.studentService.getStudent(url.id).subscribe((student: Student) => {
        this.student = student;
        console.log(this.student);
      });
    });
  }

  updateStudnet(): void {
    this.studentService.updateStudnet(this.student._id, this.student);
  }
}
