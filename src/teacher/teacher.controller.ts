import { Controller, Get } from '@nestjs/common';

@Controller('teachers')
export class TeacherContoller {
  @Get()
  getTeachers() {
    return 'Get All Teachers';
  }

  @Get('/:TeacherId')
  getTeacherById() {
    return 'Get Teacher By Id';
  }
}
