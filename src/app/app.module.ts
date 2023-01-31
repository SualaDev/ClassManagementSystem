import { Module } from '@nestjs/common';
import { StudentController } from '../student/student.controller';
import { TeacherContoller } from '../teacher/teacher.controller';
import { StudentTeacherController } from '../teacher/student.controller';
import { StudentService } from '../student/student.service';

@Module({
  imports: [],
  controllers: [StudentController, TeacherContoller, StudentTeacherController],
  providers: [StudentService],
})
export class AppModule {}
