import { TeacherModule } from '../teacher/teacher.module';
import { StudentModule } from '../student/student.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [StudentModule, TeacherModule],
})
export class AppModule {}
