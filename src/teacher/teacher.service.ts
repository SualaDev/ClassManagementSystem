import { Injectable } from '@nestjs/common';
import { teachers } from '../db';
import { FindTeacherResponseDto } from '../teacher/dto/teacher.dto';

@Injectable()
export class TeacherService {
  private teachers = teachers;

  getTeachers(): FindTeacherResponseDto[] {
    return this.teachers;
  }
}
