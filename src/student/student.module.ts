import { StudentService } from '../student/student.service';
import { Module } from '@nestjs/common';
import { StudentController } from '../student/student.controller';

@Module({
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentModule {}
