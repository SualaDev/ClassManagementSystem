import { Controller, Get, Param, Post, Put, Body } from '@nestjs/common';

@Controller('students')
export class StudentController {
  @Get()
  getStudents() {
    return 'All Students';
  }

  @Get('/:StudentId')
  getStudentById(@Param('StudentId') studentId: string) {
    return `Get Student With Id of ${studentId}`;
  }

  @Post()
  createStudent(@Body() body) {
    console.log(body);
    return `Create Student With The Following Data ${JSON.stringify(body)}`;
  }

  @Put('/:StudentId')
  updateStudent(@Param('StudentId') studentId: string, @Body() body) {
    return `Update Student With Id of ${studentId} With Data Of ${JSON.stringify(
      body,
    )}`;
  }
}
