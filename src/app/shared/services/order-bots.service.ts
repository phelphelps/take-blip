import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ORDER_BY_CREATION, ORDER_BY_NAME } from '../constants/order';
import { BotInterface } from '../interfaces/bot.interface';

@Injectable({
  providedIn: 'root'
})
export class OrderBotsService {
  public byName: string = ORDER_BY_NAME;
  public byCreation: string = ORDER_BY_CREATION;
  public currentOrderMode: string;
  public botOrderBehavior = new BehaviorSubject<string>('');

  constructor() {
    this.botOrderBehavior.next(this.byName);
  }

  changeOrderMode(newMode: string) {
    this.currentOrderMode = newMode;
    this.botOrderBehavior.next(newMode);
  }

  getCurrentOrderMode() {
    return this.botOrderBehavior.asObservable();
  }

  order(botArray: BotInterface[]): BotInterface[] {
    switch(this.currentOrderMode) {
      case this.byName:
        return botArray.sort((firstValue, secondValue) => this.compareValues(firstValue, secondValue, this.byName));
      case this.byCreation:
        return botArray.sort((firstValue, secondValue) => this.compareValues(firstValue, secondValue, this.byCreation));
      default:
        return botArray
    }
  }

  compareValues(firstValue: any, secondValue: any, attribute: string): number {
    if ( firstValue[attribute] < secondValue[attribute] ){
      return -1;
    }
    if ( firstValue[attribute] > secondValue[attribute]  ){
      return 1;
    }
    return 0;
  }
}
