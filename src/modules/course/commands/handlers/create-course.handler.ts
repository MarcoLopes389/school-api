import { ICourseRepo } from './../../interfaces/course.repo.interface';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateCourseCommand } from './../impl/create-course.command';
import { Inject } from '@nestjs/common';

@CommandHandler(CreateCourseCommand)
export class CreateCourseHandler
  implements ICommandHandler<CreateCourseCommand>
{
  constructor(
    @Inject('ICourseRepo')
    private readonly repository: ICourseRepo,
  ) {}
  async execute(command: CreateCourseCommand): Promise<void> {
    await this.repository.create(command.body);
  }
}
