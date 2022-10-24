import { ValidationError } from '../../../common/errors/validation.error';
import { CreateCourseDTO } from './../models/create-course.dto';

const units = ['hour', 'day', 'minute', 'second'];

export class CreateCourseValidator {
  static validate(course: CreateCourseDTO): CreateCourseDTO {
    if (course.description.length < 100) {
      throw new ValidationError(
        'description need to have more than 100 chars of length',
      );
    }

    let include = false;
    for (let i = 0; i < units.length; i++) {
      if (course.duration.includes(units[i])) include = true;
    }

    if (!include)
      throw new ValidationError('duration need to have unit of time');

    return course;
  }
}
