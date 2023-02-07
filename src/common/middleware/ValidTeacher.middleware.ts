import { NextFunction, Response, Request } from 'express';
import { NestMiddleware, Injectable, HttpException } from '@nestjs/common';
import { teachers } from '../../db';

@Injectable()
export class ValidTeacher implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const TeacherId = req.params.teacherId;
    const TeacherExists = teachers.some((teacher) => {
      return teacher.id === TeacherId;
    });
    if (!TeacherExists) {
      throw new HttpException('Teacher Not Found', 400);
    }
    next();
  }
}
