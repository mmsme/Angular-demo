import { Student } from './student';

export class Course {
  constructor(
    public _id: number,
    public Name: string,
    public Instructor: string,
    public list: Student[]
  ) {}
}
