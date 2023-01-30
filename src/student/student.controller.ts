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
    return `Get Student With Id of ${studentId}`;
  }

  @Post()
  createStudent(@Body() body: CreateStudentDto): StudentResponseDto {
    console.log(body);
    return `Create Student With The Following Data ${JSON.stringify(body)}`;
  }

  @Put('/:StudentId')
  updateStudent(
    @Param('StudentId') studentId: string,
    @Body() body: UpdateStudentDto,
  ): FindStudentResponseDto {
    return `Update Student With Id of ${studentId} With Data Of ${JSON.stringify(
      body,
    )}`;
  }
}
