import { ValidTeacher } from './../common/middleware/ValidTeacher.middleware';
import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { TeacherContoller } from '../teacher/teacher.controller';
import { TeacherService } from '../teacher/teacher.service';
import { StudentTeacherController } from '../teacher/student.controller';
import { StudentService } from '../student/student.service';

@Module({
  controllers: [TeacherContoller, StudentTeacherController],
  providers: [TeacherService, StudentService],
})
export class TeacherModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ValidTeacher).forRoutes({
      path: 'teachers/:teacherId',
      method: RequestMethod.GET,
    });
    consumer.apply(ValidTeacher).forRoutes({
      path: 'teachers/:teacherId/students',
      method: RequestMethod.GET,
    });
    consumer.apply(ValidTeacher).forRoutes({
      path: 'teachers/:teacherId/students/:studentId',
      method: RequestMethod.PUT,
    });
  }
}
