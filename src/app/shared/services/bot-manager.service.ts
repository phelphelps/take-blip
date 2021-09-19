import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BLOCKS_VIEW, LIST_VIEW } from '../constants/layout';
import { BotInterface } from '../interfaces/bot.interface';
import { BotLoaderService } from './bot-loader.service';
import { OrderBotsService } from './order-bots.service';

@Injectable({
  providedIn: 'root',
})
export class BotManagerService {
  private notFavoriteBots: BehaviorSubject<BotInterface[]>;
  private favoriteBots: BehaviorSubject<BotInterface[]>;
  private botList: BotInterface[];
  private searchInput: string;

  constructor(
    private botLoaderService: BotLoaderService,
    private orderBotsService: OrderBotsService
    ) {
    this.botList = this.botLoaderService.getAllBots();
    this.notFavoriteBots = new BehaviorSubject<BotInterface[]>(this.botList);
    this.favoriteBots = new BehaviorSubject<BotInterface[]>([]);
    this.orderBotsService.getCurrentOrderMode().subscribe(()=>{
      this.orderBots();
    })
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

    const newNotFavoriteBotsList = this.botList.filter(
      (botItem) => botItem.favorite === false
    );
    this.notFavoriteBots.next(newNotFavoriteBotsList);
  }

  orderBots() {
    let favoriteBots;
    let notFavoriteBots;

    if (this.searchInput) {
      const searchResults = this.searchBots(this.searchInput);
      favoriteBots = searchResults.filter(bot => bot.favorite);
      notFavoriteBots = searchResults.filter(bot => !bot.favorite);
    } else {
      favoriteBots = this.botList.filter(bot => bot.favorite);
      notFavoriteBots = this.botList.filter(bot => !bot.favorite);
    }
    this.favoriteBots.next(this.orderBotsService.order(favoriteBots));
    this.notFavoriteBots.next(this.orderBotsService.order(notFavoriteBots));

  }

  setSearchInput(input: string) {
    this.searchInput = input.toLowerCase();
    this.orderBots();
  }

  searchBots(searchInput: string) {
    return this.botList.filter((bot) => bot.name.toLowerCase().includes(searchInput));
  }
}
