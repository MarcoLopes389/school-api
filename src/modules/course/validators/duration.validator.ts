import { ValidationError } from './../../../common/errors/validation.error';
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

const units = ['hour', 'day', 'minute', 'second'];

@ValidatorConstraint()
export class DurationValidator implements ValidatorConstraintInterface {
  validate(value: string): boolean | Promise<boolean> {
    let include = false;
    for (let i = 0; i < units.length; i++) {
      if (value.includes(units[i])) include = true;
    }
    return include;
  }
  defaultMessage?(): string {
    throw new ValidationError('duration need to have unit of time');
  }
}
