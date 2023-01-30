import { Controller, Get, Param, Put } from '@nestjs/common';
import {
  FindStudentResponseDto,
  StudentResponseDto,
} from '../student/dto/student.dto';

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
  @Get()
  getTeachers(@Param('teacherId') teacherId: string): FindStudentResponseDto[] {
    return `Get All Students That Belong To The Teacher With An Id of ${teacherId}`;
  }

  @Put('/:studentId')
  updateStudentTeacher(
    @Param('teacherId') teacherId: string,
    @Param('studentId') studentId: string,
  ): StudentResponseDto {
    return `Update Student With The Id Of ${studentId} To Teacher With Id Of ${teacherId}`;
  }
}
