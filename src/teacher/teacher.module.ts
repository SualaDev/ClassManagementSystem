import { Module } from '@nestjs/common';
import { TeacherContoller } from '../teacher/teacher.controller';
import { TeacherService } from '../teacher/teacher.service';
import { StudentTeacherController } from '../teacher/student.controller';
import { StudentService } from '../student/student.service';

@Module({
  controllers: [TeacherContoller, StudentTeacherController],
  providers: [TeacherService, StudentService],
})
export class TeacherModule {}
