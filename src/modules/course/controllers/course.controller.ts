import { Controller, Get } from '@nestjs/common';

@Controller()
export class CourseController {
  @Get()
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async getCourse() {}
}
