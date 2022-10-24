import { ValidationError } from '../errors/validation.error';
import {
  BadRequestException,
  CallHandler,
  ExecutionContext,
  NestInterceptor,
} from '@nestjs/common';
import { catchError, Observable, throwError } from 'rxjs';

export class ErrorInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      catchError((error) => {
        if (error instanceof ValidationError) {
          throwError(() => new BadRequestException(undefined, error.message));
        }

        throw new BadRequestException();
      }),
    );
  }
}
