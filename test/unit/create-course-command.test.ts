import { CqrsModule } from '@nestjs/cqrs';
import { Test } from '@nestjs/testing';
import { ValidationError } from '../../src/common/errors/validation.error';
import { CreateCourseCommand } from '../../src/modules/course/commands/impl/create-course.command';
import { CourseRepoMock } from '../__mocks__/repo/course.repo.mock';
import { CreateCourseHandler } from '../../src/modules/course/commands/handlers/create-course.handler';
let sut: CreateCourseHandler;

describe('Create user query tests', () => {
  beforeAll(async () => {
    const test = await Test.createTestingModule({
      imports: [CqrsModule],
      providers: [
        {
          provide: 'ICourseRepo',
          useClass: CourseRepoMock,
        },
        CreateCourseHandler,
      ],
    }).compile();

    sut = test.get(CreateCourseHandler);
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  test('should throw validation error if description length is less than 100', async () => {
    try {
      await sut.execute(
        new CreateCourseCommand({
          description: 'less than 100 chars',
          duration: '1 hour',
          name: 'Test course',
        }),
      );
    } catch (error) {
      expect(error).toBeInstanceOf(ValidationError);
      expect(error.message).toBe(
        'description need to have more than 100 chars of length',
      );
    }
  });
  test('should throw validation error if not have an unit of time in duration', async () => {
    try {
      await sut.execute(
        new CreateCourseCommand({
          description:
            'this text have 100 characters, but its completly useless, I can write all the time, but I dont want!',
          duration: '1 four',
          name: 'Test course',
        }),
      );
    } catch (error) {
      expect(error).toBeInstanceOf(ValidationError);
      expect(error.message).toBe('duration need to have unit of time');
    }
  });
  test('should return void if created successfully', async () => {
    const result = await sut.execute(
      new CreateCourseCommand({
        description:
          'this text have 100 characters, but its completly useless, I can write all the time, but I dont want!',
        duration: '1 hour',
        name: 'Test course',
      }),
    );

    expect(result).toBeUndefined();
  });
});
