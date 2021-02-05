import { AddCourseComponent } from './add-course/add-course.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CourseComponent } from './course/course.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { DepartmentComponent } from './department/department.component';
import { EditDepartmentComponent } from './edit-department/edit-department.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { EnrollStudentComponent } from './enroll-student/enroll-student.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponentComponent } from './navbar-component/navbar-component.component';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { NotFoundComponent } from './not-found/not-found.component';
import { StudentComponent } from './student/student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { UpdateCourseComponent } from './update-course/update-course.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponentComponent,
    HomeComponent,
    StudentComponent,
    AddStudentComponent,
    EditStudentComponent,
    StudentDetailsComponent,
    DepartmentComponent,
    AddDepartmentComponent,
    EditDepartmentComponent,
    CourseComponent,
    AddCourseComponent,
    CourseDetailsComponent,
    EnrollStudentComponent,
    UpdateCourseComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
