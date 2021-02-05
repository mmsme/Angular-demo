import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../models/student';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  studentList: Student[] = [];
  p!: number;
  selectedStudent: Student = new Student(0, '', '');
  itemsCount = 5;

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.studentService.getAllStudents().subscribe((data: Student[]) => {
      this.studentList = data;
    });
  }

  deleteStudent(student: Student): void {
    this.studentService.deleteByID(student._id);
  }
}
