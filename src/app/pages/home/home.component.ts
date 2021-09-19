import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BotInterface } from 'src/app/shared/interfaces/bot.interface';
import { BotDetailsService } from 'src/app/shared/services/bot-details.service';
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
  public layoutMode: string = BLOCKS_VIEW;
  public blockMode: string = BLOCKS_VIEW;
  public listMode: string = LIST_VIEW;

  constructor(
    private botManagerService: BotManagerService,
    private botDetailsService: BotDetailsService,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.botManagerService.getNotFavoriteBots()
    .subscribe((notFavoriteBotsData) => (this.notFavoriteBots = notFavoriteBotsData));

    this.botManagerService.getFavoriteBots()
    .subscribe((favoriteBotsData) => this.favoriteBots = favoriteBotsData);
  }

  toggleFavorite(newValue: any, bot: BotInterface) {
      this.botManagerService.changeFavoriteState(bot, newValue.isFavorite);
  }

  changeLayout(newMode: string) {
    this.layoutMode = newMode;
  }

  openDetails(selectedBot: BotInterface) {
    this.botDetailsService.setBot(selectedBot);
    this.router.navigateByUrl('details');
  }
}
