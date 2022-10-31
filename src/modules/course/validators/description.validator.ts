import { ValidationError } from './../../../common/errors/validation.error';
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ async: true })
export class DescriptionValidator implements ValidatorConstraintInterface {
  validate(value: string): boolean | Promise<boolean> {
    return value.length >= 100;
  }
  defaultMessage(): string {
    throw new ValidationError(
      'description need to have more than 100 chars of length',
    );
  }
}
