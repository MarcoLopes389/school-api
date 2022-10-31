import { UndefinedPropertyError } from '../../src/common/errors/undefined-property.error';
import { NotFoundError } from '../../src/common/errors/not-found.error';
import { DeleteCourseBydIdHandler } from '../../src/modules/course/commands/handlers/delete-course-by-id.handler';
import { CqrsModule } from '@nestjs/cqrs';
import { Test } from '@nestjs/testing';
import { CourseRepoMock } from '../__mocks__/repo/course.repo.mock';
import { DeleteCourseByIdCommand } from '../../src/modules/course/commands/impl/delete-course-by-id.command';

let sut: DeleteCourseBydIdHandler;

describe('', () => {
  beforeAll(async () => {
    const test = await Test.createTestingModule({
      imports: [CqrsModule],
      providers: [
        {
          provide: 'ICourseRepo',
          useClass: CourseRepoMock,
        },
        DeleteCourseBydIdHandler,
      ],
    }).compile();

    sut = test.get(DeleteCourseBydIdHandler);
  });
  test('should throw error if id is undefined', async () => {
    try {
      await sut.execute(new DeleteCourseByIdCommand(undefined));
    } catch (error) {
      expect(error).toBeInstanceOf(UndefinedPropertyError);
    }
  });
  test('should throw error if id not exists', async () => {
    try {
      await sut.execute(new DeleteCourseByIdCommand('qwtegdwxiw'));
    } catch (error) {
      expect(error).toBeInstanceOf(NotFoundError);
    }
  });
});
