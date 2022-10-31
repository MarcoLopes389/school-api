import { UndefinedPropertyError } from './../../../../common/errors/undefined-property.error';
import { NotFoundError } from './../../../../common/errors/not-found.error';
import { ICourseRepo } from './../../interfaces/course.repo.interface';
import { UpdateCourseCommand } from './../impl/update-course.command';
import { ICommandHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
export class UpdateCourseHandler
  implements ICommandHandler<UpdateCourseCommand>
{
  constructor(
    @Inject('ICourseRepo')
    private readonly repository: ICourseRepo,
  ) {}
  async execute(command: UpdateCourseCommand): Promise<any> {
    if (!command.body.id) {
      throw new UndefinedPropertyError();
    }

    const course = await this.repository.getById(command.body.id);

    if (!course) {
      throw new NotFoundError();
    }

    return await this.repository.update(command.body);
  }
}
