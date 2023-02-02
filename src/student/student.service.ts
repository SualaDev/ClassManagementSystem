import { Injectable } from '@nestjs/common';
import { students } from '../db';
import {
  FindStudentResponseDto,
  CreateStudentDto,
  StudentResponseDto,
  UpdateStudentDto,
} from './dto/student.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class StudentService {
  students = students;
  getStudents(): FindStudentResponseDto[] {
    return this.students;
  }
  getStudentById(StudentId: string): FindStudentResponseDto {
    return students.find((student) => {
      return student.id === StudentId;
    });
  }
  createStudent(payload: CreateStudentDto): StudentResponseDto {
    const newStudents = {
      id: uuid(),
      ...payload,
    };
    this.students.push(newStudents);
    return newStudents;
  }
  updateStudent(payload: UpdateStudentDto, StudentId: string) {
    let updatedStudent: StudentResponseDto;

    const updateStudentList = this.students.map((student) => {
      if (student.id === StudentId) {
        updatedStudent = {
          id: StudentId,
          ...payload,
        };
        return updatedStudent;
      } else return student;
    });

    this.students = updateStudentList;
    return updatedStudent;
  }

  getStudentsByTeacher(teacherId: string): FindStudentResponseDto[] {
    return this.students.filter((student) => {
      return student.teacher === teacherId;
    });
  }

  updateStudentTeacher(
    teacherId: string,
    studentId: string,
  ): StudentResponseDto {
    let updatedStudent: StudentResponseDto;

    const updateStudentList = this.students.map((student) => {
      if (student.id === studentId) {
        updatedStudent = {
          ...student,
          teacher: teacherId,
        };
        return updatedStudent;
      } else return student;
    });

    this.students = updateStudentList;
    return updatedStudent;
  }
}
