import { HttpException, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { students } from '../../db';

@Injectable()
export class ValidStudent implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const studentId = req.params.studentId;
    const StudentExists = students.some((student) => {
      return studentId === student.id;
    });
    if (!StudentExists) {
      throw new HttpException('Students not found', 400);
    }
    next();
  }
}
