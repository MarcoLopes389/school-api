import { WithRequiredProperty } from 'src/common/utils/with-required-property.type';
import { Course } from './../../models/course.entity';
export class UpdateCourseCommand {
  body: WithRequiredProperty<Partial<Course>, 'id'>;
  constructor(body: WithRequiredProperty<Partial<Course>, 'id'>) {
    this.body = body;
  }
}
