import { Component, OnDestroy, OnInit } from '@angular/core';
import { AnalyticsInterface } from 'src/app/shared/interfaces/analytics.interface';
import { BotInterface } from 'src/app/shared/interfaces/bot.interface';
import { BotDetailsService } from 'src/app/shared/services/bot-details.service';

@Component({
  selector: 'app-bot-details',
  templateUrl: './bot-details.component.html',
  styleUrls: ['./bot-details.component.scss']
})
export class BotDetailsComponent implements OnInit {
  public botInfo: BotInterface;

  constructor(private botDetailsService: BotDetailsService) {
    this.getBotInformation();
  }

  ngOnInit(): void {
  }

  getBotInformation() {
    this.botInfo = this.botDetailsService.getBot();
  }

}
