import { Injectable } from '@nestjs/common';
import { students } from '../db';
import { FindStudentResponseDto } from './dto/student.dto';

@Injectable()
export class StudentService {
  students = students;
  getStudents(): FindStudentResponseDto[] {
    return this.students;
  }
}
