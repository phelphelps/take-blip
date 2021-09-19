import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment';

@Pipe({name: 'createdAt'})
export class CreatedAtPipe implements PipeTransform {
  transform(value: any): any {
    const fullDate = moment(value).format('DD/MM/YYYY')
    return `Created at ${fullDate}`
  }
}
