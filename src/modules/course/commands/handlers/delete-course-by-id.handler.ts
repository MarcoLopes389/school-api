import { NotFoundError } from './../../../../common/errors/not-found.error';
import { UndefinedPropertyError } from './../../../../common/errors/undefined-property.error';
import { ICourseRepo } from './../../interfaces/course.repo.interface';
import { DeleteCourseByIdCommand } from './../impl/delete-course-by-id.command';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';

@CommandHandler(DeleteCourseByIdCommand)
export class DeleteCourseBydIdHandler
  implements ICommandHandler<DeleteCourseByIdCommand>
{
  constructor(
    @Inject('ICourseRepo')
    private readonly repository: ICourseRepo,
  ) {}
  async execute(command: DeleteCourseByIdCommand): Promise<void> {
    if (!command.id) {
      throw new UndefinedPropertyError();
    }

    const course = await this.repository.getById(command.id);

    if (!course) {
      throw new NotFoundError();
    }

    await this.repository.delete(command.id);
  }
}
