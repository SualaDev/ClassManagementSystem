import { Controller, Get, Param } from '@nestjs/common';
import { FindTeacherResponseDto } from '../teacher/dto/teacher.dto';
import { TeacherService } from '../teacher/teacher.service';

@Controller('teachers')
export class TeacherContoller {
  constructor(private readonly teacherService: TeacherService) {}
  @Get()
  getTeachers(): FindTeacherResponseDto[] {
    return this.teacherService.getTeachers();
  }

  @Get('/:TeacherId')
  getTeacherById(
    @Param('TeacherId') teacherId: string,
  ): FindTeacherResponseDto {
    return this.teacherService.getTeacherById(teacherId);
  }
}
