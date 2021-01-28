import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCourseComponent } from './add-course/add-course.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { CourseComponent } from './course/course.component';
import { DepartmentComponent } from './department/department.component';
import { EditDepartmentComponent } from './edit-department/edit-department.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { HomeComponent } from './home/home.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'students', component: StudentComponent },
  { path: 'students/add', component: AddStudentComponent },
  { path: 'students/edit/:id', component: EditStudentComponent },
  { path: 'students/details/:id', component: StudentDetailsComponent },
  { path: 'department', component: DepartmentComponent },
  { path: 'department/add', component: AddDepartmentComponent },
  { path: 'department/edit/:id', component: EditDepartmentComponent },
  { path: 'course', component: CourseComponent },
  { path: 'course/add', component: AddCourseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
