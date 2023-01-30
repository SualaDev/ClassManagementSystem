import { Controller, Get, Param } from '@nestjs/common';
import { FindTeacherResponseDto } from '../teacher/dto/teacher.dto';

@Controller('teachers')
export class TeacherContoller {
  @Get()
  getTeachers(): FindTeacherResponseDto[] {
    return 'Get All Teachers';
  }

  @Get('/:TeacherId')
  getTeacherById(
    @Param('TeacherId') teacherId: string,
  ): FindTeacherResponseDto {
    return `Get Teacher By The Id Of ${teacherId}`;
  }
}
