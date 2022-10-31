import { NotFoundError } from './../../../src/common/errors/not-found.error';
import { ValidationError } from './../../../src/common/errors/validation.error';
import { courseResults } from './../../__mocks__/repo/course-result.repo';
import { UndefinedPropertyError } from './../../../src/common/errors/undefined-property.error';
import { UpdateCourseHandler } from './../../../src/modules/course/commands/handlers/update-course.handler';
import { CqrsModule } from '@nestjs/cqrs';
import { Test } from '@nestjs/testing';
import { CourseRepoMock } from '../../__mocks__/repo/course.repo.mock';
import { UpdateCourseCommand } from '../../../src/modules/course/commands/impl/update-course.command';

let sut: UpdateCourseHandler;

describe('Update course command tests', () => {
  beforeAll(async () => {
    const test = await Test.createTestingModule({
      imports: [CqrsModule],
      providers: [
        {
          provide: 'ICourseRepo',
          useClass: CourseRepoMock,
        },
        UpdateCourseHandler,
      ],
    }).compile();

    sut = test.get(UpdateCourseHandler);
  });
  test('should throw undefined property error if id is undefined', async () => {
    try {
      await sut.execute(
        new UpdateCourseCommand({
          id: undefined,
        }),
      );
    } catch (error) {
      expect(error).toBeInstanceOf(UndefinedPropertyError);
    }
  });

  test('should throw not found error if id not exists', async () => {
    try {
      await sut.execute(
        new UpdateCourseCommand({
          id: 'dvodnondfsobdfv',
        }),
      );
    } catch (error) {
      expect(error).toBeInstanceOf(NotFoundError);
    }
  });

  test('should throw validation error if description is less than 100 of length', async () => {
    try {
      await sut.execute(
        new UpdateCourseCommand({
          id: courseResults[0].id,
          description: 'this is not a valid description',
        }),
      );
    } catch (error) {
      expect(error).toBeInstanceOf(ValidationError);
    }
  });

  test('should throw validation error if duration is not valid', async () => {
    try {
      await sut.execute(
        new UpdateCourseCommand({
          id: courseResults[0].id,
          duration: '5 fours',
        }),
      );
    } catch (error) {
      expect(error).toBeInstanceOf(ValidationError);
    }
  });
});
