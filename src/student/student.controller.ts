import { Controller, Get, Param, Post, Put, Body } from '@nestjs/common';
import {
  CreateStudentDto,
  UpdateStudentDto,
  FindStudentResponseDto,
  StudentResponseDto,
} from './dto/student.dto';
import { StudentService } from './student.service';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}
  @Get()
  getStudents(): FindStudentResponseDto[] {
    return this.studentService.getStudents();
  }

  @Get('/:StudentId')
  getStudentById(
    @Param('StudentId') studentId: string,
  ): FindStudentResponseDto {
    return this.studentService.getStudentById(studentId);
  }

  @Post()
  createStudent(@Body() body: CreateStudentDto): StudentResponseDto {
    console.log(body);
    return this.studentService.createStudent(body);
  }

  @Put('/:StudentId')
  updateStudent(
    @Param('StudentId') studentId: string,
    @Body() body: UpdateStudentDto,
  ): StudentResponseDto {
    return this.studentService.updateStudent(body, studentId);
  }
}
