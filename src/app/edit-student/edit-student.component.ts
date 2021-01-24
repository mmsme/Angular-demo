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
    this.ar.params.subscribe((hamoza) => {
      this.studentService.getStudent(hamoza['id']).subscribe((d) => {
        this.student = d;
        console.log(this.student);
      });
    });
  }

  updateStudnet() {
    this.studentService.updateStudnet(this.student._id, this.student);
  }
}
