import { UndefinedPropertyError } from '../../../src/common/errors/undefined-property.error';
import { GetCourseByIdHandler } from '../../../src/modules/course/queries/handlers/get-course-by-id.handler';
import { courseResults } from '../../__mocks__/repo/course-result.repo';
import { CourseRepoMock } from '../../__mocks__/repo/course.repo.mock';
import { CqrsModule } from '@nestjs/cqrs';
import { Test } from '@nestjs/testing';
import { GetCourseByIdQuery } from '../../../src/modules/course/queries/impl/get-course-by-id.query';

let sut: GetCourseByIdHandler;

describe('Find by id user query tests', () => {
  beforeAll(async () => {
    const test = await Test.createTestingModule({
      imports: [CqrsModule],
      providers: [
        {
          provide: 'ICourseRepo',
          useClass: CourseRepoMock,
        },
        GetCourseByIdHandler,
      ],
    }).compile();

    sut = test.get(GetCourseByIdHandler);
  });

  test('should be defined', () => {
    expect(sut).toBeDefined();
  });

  test('should return the user', async () => {
    const result = await sut.execute(
      new GetCourseByIdQuery(courseResults[0].id),
    );
    expect(result).toBeDefined();
    expect(result).toBe(courseResults[0]);
  });
  test('should throw error if id is not especified', async () => {
    try {
      await sut.execute(new GetCourseByIdQuery(undefined));
    } catch (error) {
      expect(error).toBeInstanceOf(UndefinedPropertyError);
    }
  });
  test('should return null if not exist registers', async () => {
    const result = await sut.execute(new GetCourseByIdQuery('sjdcjsbdcb'));

    expect(result).toBeUndefined();
  });
});
