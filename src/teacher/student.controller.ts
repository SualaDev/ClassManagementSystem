import { Controller, Get, Param, Put } from '@nestjs/common';

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
  @Get()
  getTeachers(@Param('teacherId') teacherId: string) {
    return `Get All Students That Belong To The Teacher With An Id of ${teacherId}`;
  }

  @Put('/:studentId')
  updateStudentTeacher(
    @Param('teacherId') teacherId: string,
    @Param('studentId') studentId: string,
  ) {
    return `Update Student With The Id Of ${studentId} To Teacher With Id Of ${teacherId}`;
  }
}
