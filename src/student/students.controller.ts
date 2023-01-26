import { Controller, Get, Post, Put } from '@nestjs/common';

@Controller('students')
export class StudentController {
  @Get()
  getStudents() {
    return 'All Students';
  }

  @Get('/:StudentById')
  getStudentById() {
    return 'Get Students By Id';
  }

  @Post()
  createStudent() {
    return 'Create Student';
  }

  @Put('/:StudentById')
  updateStudent() {
    return 'Student Updated';
  }
}
