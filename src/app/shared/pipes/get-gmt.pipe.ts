import { Pipe, PipeTransform } from "@angular/core";
import moment from "moment";
import { GMT_CITIES } from "../constants/gmt-cities";

@Pipe({name: 'getGMT'})

export class GetGmtPipe implements PipeTransform {
  transform(date: string): string {
    const gmtValue = moment(date).format('Z');
    const gmtList = GMT_CITIES;
    console.log(gmtValue, gmtList[gmtValue])
    return gmtList[gmtValue];
  }
}
