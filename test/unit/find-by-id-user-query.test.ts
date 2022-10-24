import { GetCourseHandler } from './../../src/modules/course/queries/handlers/get-course.handler';
import { resultById } from './../__mocks__/repo/course-result.repo';
import { CourseRepoMock } from '../__mocks__/repo/course.repo.mock';
import { QueryBus, CqrsModule } from '@nestjs/cqrs';
import { Test } from '@nestjs/testing';
import { GetCourseQuery } from '../../src/modules/course/queries/impl/get-course.query';

let sut: QueryBus;

describe('Find by id user query tests', () => {
  beforeAll(async () => {
    const test = await Test.createTestingModule({
      imports: [CqrsModule],
      providers: [
        {
          provide: 'ICourseRepo',
          useClass: CourseRepoMock,
        },
        GetCourseHandler,
      ],
    }).compile();

    sut = test.get<QueryBus>(QueryBus);
  });

  test('should be defined', () => {
    expect(sut).toBeDefined();
  });

  test('should return the user', async () => {
    const result = await sut.execute(new GetCourseQuery(resultById.id));
    expect(result).toBeDefined();
    expect(result).toBe(resultById);
  });
  // test('should throw error if id is not especified', () => {});
  // test('should return an empty object if not exist registers', () => {});
});
