import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
