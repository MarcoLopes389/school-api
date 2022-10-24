import { randomUUID } from 'crypto';
import { Course } from '../../../src/modules/course/models/course.entity';
export const resultById: Course = {
  description:
    'this text have 100 characters, but its completly useless, I can write all the time, but I dont want!',
  duration: '1 hour',
  name: 'Test course',
  id: randomUUID(),
};
