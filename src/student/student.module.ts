import { StudentService } from '../student/student.service';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { StudentController } from '../student/student.controller';
import { ValidStudent } from '../common/middleware/ValidStudent.middleware';
import { RequestMethod } from '@nestjs/common/enums';

@Module({
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ValidStudent).forRoutes({
      path: 'students/:studentId',
      method: RequestMethod.GET,
    });
    consumer.apply(ValidStudent).forRoutes({
      path: 'students/:studentId',
      method: RequestMethod.PUT,
    });
  }
}
