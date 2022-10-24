import { CreateCourseDTO } from './../../models/create-course.dto';
export class CreateCourseCommand {
  body: CreateCourseDTO;
  constructor(body: CreateCourseDTO) {
    this.body = body;
  }
}
