import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment';

@Pipe({name: 'createdAt'})
export class CreatedAtPipe implements PipeTransform {
  transform(date: string): string {
    const fullDate = moment(date).format('DD/MM/YYYY');
    return `Created at ${fullDate}`
  }
}
