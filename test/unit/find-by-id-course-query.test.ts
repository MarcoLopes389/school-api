import { BadRequestException } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { GetCourseHandler } from '../../src/modules/course/queries/handlers/get-course.handler';
import { resultById } from '../__mocks__/repo/course-result.repo';
import { CourseRepoMock } from '../__mocks__/repo/course.repo.mock';
import { CqrsModule } from '@nestjs/cqrs';
import { Test } from '@nestjs/testing';
import { GetCourseQuery } from '../../src/modules/course/queries/impl/get-course.query';

let sut: GetCourseHandler;
const id = randomUUID();

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

    sut = test.get(GetCourseHandler);
  });

  test('should be defined', () => {
    expect(sut).toBeDefined();
  });

  test('should return the user', async () => {
    const result = await sut.execute(new GetCourseQuery(resultById.id));
    expect(result).toBeDefined();
    expect(result).toBe(resultById);
  });
  test('should throw error if id is not especified', async () => {
    try {
      await sut.execute(new GetCourseQuery(undefined));
    } catch (error) {
      expect(error).toBeInstanceOf(BadRequestException);
    }
  });
  test('should return null if not exist registers', async () => {
    const result = await sut.execute(new GetCourseQuery('sjdcjsbdcb'));

    expect(result).toBeUndefined();
  });
});
