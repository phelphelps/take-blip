import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BotInterface } from '../interfaces/bot.interface';
import { BotLoaderService } from './bot-loader.service';

@Injectable({
  providedIn: 'root',
})
export class BotManagerService {
  private notFavoriteBots: BehaviorSubject<BotInterface[]>;
  private favoriteBots: BehaviorSubject<BotInterface[]>;
  private botList: BotInterface[];

  constructor(private botLoaderService: BotLoaderService) {
    this.botList = this.botLoaderService.getAllBots();
    this.notFavoriteBots = new BehaviorSubject<BotInterface[]>(this.botList);
    this.favoriteBots = new BehaviorSubject<BotInterface[]>([]);
  }

  getNotFavoriteBots(): Observable<any> {
    return this.notFavoriteBots.asObservable();
  }

  getFavoriteBots(): Observable<any> {
    return this.favoriteBots.asObservable();
  }

  changeFavoriteState(bot: BotInterface, newState: boolean) {
    bot.favorite = newState;
    const botIndex = this.botList.findIndex((botItem) => botItem.id === bot.id);
    this.botList[botIndex] = bot;
    this.updateList();
  }

  updateList() {
    const newFavoriteBotsList = this.botList.filter(
      (botItem) => botItem.favorite === true
    );
    this.favoriteBots.next(newFavoriteBotsList);
    console.log('setei isso na favorite => ', newFavoriteBotsList);

    const newNotFavoriteBotsList = this.botList.filter(
      (botItem) => botItem.favorite === false
    );
    this.notFavoriteBots.next(newNotFavoriteBotsList);
  }
}
