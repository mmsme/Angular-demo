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
  itemsCount: number = 5;

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.studentService.getAllStudents().subscribe(
      (data) => {
        this.studentList = data;
      },
      (e) => {
        console.log('Falied To Get Data');
      },
      () => {
        console.log('Complete ya 3asel');
      }
    );
  }

  deleteStudent(student: Student): void {
    this.studentService.deleteByID(student._id);
  }
}
