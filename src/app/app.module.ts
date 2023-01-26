import { Module } from '@nestjs/common';
import { StudentController } from '../student/students.controller';
import { TeacherContoller } from '../teacher/teacher.controller';
import { StudentTeacherController } from '../teacher/student.controller';

@Module({
  imports: [],
  controllers: [StudentController, TeacherContoller, StudentTeacherController],
})
export class AppModule {}
