import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class AddStudentComponent implements OnInit {
  newStudnet: Student = new Student(0, '', '');
  constructor(private studentService: StudentService) {}

  ngOnInit(): void {}

  addStudnet(): void {
    console.log(this.newStudnet);
    if (
      this.newStudnet._id == 0 ||
      this.newStudnet.Name == '' ||
      this.newStudnet.Email == ''
    ) {
      alert('Please Enter Data');
    } else {
      this.studentService.addStudnet(this.newStudnet);
      this.resetStudent();
    }
  }

  resetStudent(): void {
    this.newStudnet._id = 0;
    this.newStudnet.Name = '';
    this.newStudnet.Email = '';
  }
}
