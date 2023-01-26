import { Controller, Get, Put } from '@nestjs/common';

@Controller('/teachers/:teacherId/students')
export class StudentTeacherController {
  @Get()
  getTeachers() {
    return 'Students for the Teacher';
  }

  @Put('/:studentId')
  updateStudentTeacher() {
    return 'Update Student Teacher';
  }
}
