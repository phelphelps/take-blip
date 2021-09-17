import { Component, OnInit } from '@angular/core';
import { BotInterface } from 'src/app/shared/interfaces/bot.interface';
import { BotManagerService } from 'src/app/shared/services/bot-manager.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public favoriteBots: BotInterface[];
  public notFavoriteBots: BotInterface[];

  constructor(private botManagerService: BotManagerService) {}

  ngOnInit(): void {
    this.botManagerService
      .getNotFavoriteBots()
      .subscribe((e) => (this.notFavoriteBots = e));

    this.botManagerService.getFavoriteBots().subscribe((e) => {
      this.favoriteBots = e;
      console.log('meu home recebeu isso aqui =>', this.favoriteBots);
    });
  }

  toggleFavorite(newValue: any, bot: BotInterface) {
    if (newValue.isFavorite) {
      this.botManagerService.changeFavoriteState(bot, true);
    } else {
      this.botManagerService.changeFavoriteState(bot, false);
    }
  }
}
