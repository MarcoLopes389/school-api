import { randomUUID } from 'crypto';
import { Course } from '../../../src/modules/course/models/course.entity';
export const resultById: Course = {
  description: 'This is a tes course',
  duration: '1 hour',
  name: 'Test Course',
  id: randomUUID(),
};
