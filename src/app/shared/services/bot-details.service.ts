import { Injectable } from '@angular/core';
import { BotInterface } from '../interfaces/bot.interface';

@Injectable({
  providedIn: 'root'
})
export class BotDetailsService {
  private botHolder: BotInterface;

  constructor() { }

  getBot() {
    return this.botHolder;
  }

  setBot(selectedBot: BotInterface) {
    this.botHolder = selectedBot;
  }
}
