import { Controller, Get, Param } from '@nestjs/common';

@Controller('teachers')
export class TeacherContoller {
  @Get()
  getTeachers() {
    return 'Get All Teachers';
  }

  @Get('/:TeacherId')
  getTeacherById(@Param('TeacherId') teacherId: string) {
    return `Get Teacher By The Id Of ${teacherId}`;
  }
}
