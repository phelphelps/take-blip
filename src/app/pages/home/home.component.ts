import { Component, OnInit } from '@angular/core';
import { BotInterface } from 'src/app/shared/interfaces/bot.interface';
import { BotManagerService } from 'src/app/shared/services/bot-manager.service';
import { BLOCKS_VIEW, LIST_VIEW } from '../../shared/constants/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public favoriteBots: BotInterface[];
  public notFavoriteBots: BotInterface[];
  public layoutMode: string = BLOCKS_VIEW; //mudar
  public blockMode: string = BLOCKS_VIEW;
  public listMode: string = LIST_VIEW;

  constructor(private botManagerService: BotManagerService) {}

  ngOnInit(): void {
    this.botManagerService.getNotFavoriteBots()
    .subscribe((notFavoriteBotsData) => (this.notFavoriteBots = notFavoriteBotsData));

    this.botManagerService.getFavoriteBots()
    .subscribe((favoriteBotsData) => this.favoriteBots = favoriteBotsData);
  }

  toggleFavorite(newValue: any, bot: BotInterface) {
    if (newValue.isFavorite) {
      this.botManagerService.changeFavoriteState(bot, true);
    } else {
      this.botManagerService.changeFavoriteState(bot, false);
    }
  }

  changeLayout(newMode: string) {
    this.layoutMode = newMode;
  }
}
