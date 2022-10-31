import { GetAllCoursesHandler } from '../../src/modules/course/queries/handlers/get-all-courses.handler';
import { CqrsModule } from '@nestjs/cqrs';
import { CourseRepoMock } from '../__mocks__/repo/course.repo.mock';
import { Test } from '@nestjs/testing';

let sut: GetAllCoursesHandler;

describe('Find all query test', () => {
  beforeAll(async () => {
    const test = await Test.createTestingModule({
      imports: [CqrsModule],
      providers: [
        {
          provide: 'ICourseRepo',
          useClass: CourseRepoMock,
        },
        GetAllCoursesHandler,
      ],
    }).compile();

    sut = test.get(GetAllCoursesHandler);
  });

  test('should need to return empty list if not have items', async () => {
    const result = await sut.execute();
    expect(result.length).toBe(0);
  });

  test('should return a list of course objects', async () => {
    const result = await sut.execute();
    expect(result.length).toBeGreaterThan(0);
    result.map((element) => {
      expect(element).toHaveProperty('description');
      expect(element).toHaveProperty('duration');
      expect(element).toHaveProperty('id');
      expect(element).toHaveProperty('name');
    });
  });
});
