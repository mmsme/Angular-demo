import { Student } from './student';

export class Course {
  constructor(
    // tslint:disable-next-line:variable-name
    public _id: number,
    public Name: string,
    public Instructor: string,
    public list: Student[]
  ) {}
}
