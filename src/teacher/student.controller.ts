import { Controller, Get, Param, Put, ParseUUIDPipe } from '@nestjs/common';
import {
  FindStudentResponseDto,
  StudentResponseDto,
} from '../student/dto/student.dto';
import { StudentService } from '../student/student.service';

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
  constructor(private readonly studentService: StudentService) {}
  @Get()
  getTeachers(
    @Param('teacherId', new ParseUUIDPipe()) teacherId: string,
  ): FindStudentResponseDto[] {
    return this.studentService.getStudentsByTeacher(teacherId);
  }

  @Put('/:studentId')
  updateStudentTeacher(
    @Param('teacherId', new ParseUUIDPipe()) teacherId: string,
    @Param('studentId', new ParseUUIDPipe()) studentId: string,
  ): StudentResponseDto {
    return this.studentService.updateStudentTeacher(teacherId, studentId);
  }
}
