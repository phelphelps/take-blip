import { Injectable } from '@angular/core';
import botList from '../../../assets/data.json';
import { BotInterface } from '../interfaces/bot.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class BotLoaderService {
  constructor() {}

  getAllBots(): BotInterface[] {
    const bots = botList.map((botItem: BotInterface) => {
      return {
        ...botItem,
        id: uuid(),
        favorite: false,
      };
    });

    return bots;
  }
}
