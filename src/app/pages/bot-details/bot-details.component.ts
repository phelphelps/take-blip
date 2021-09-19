import { Component, OnInit } from '@angular/core';
import { ACTIVE_USERS, BOT_REGION, RECEIVED_MESSAGES, SENT_MESSAGES } from 'src/app/shared/constants/analytics';
import { AnalyticsMessageInterface, AnalyticsUserInterface } from 'src/app/shared/interfaces/analytics.interface';
import { BotInterface } from 'src/app/shared/interfaces/bot.interface';
import { BotDetailsService } from 'src/app/shared/services/bot-details.service';

@Component({
  selector: 'app-bot-details',
  templateUrl: './bot-details.component.html',
  styleUrls: ['./bot-details.component.scss']
})
export class BotDetailsComponent implements OnInit {
  public botInfo: BotInterface;
  public botMessages: AnalyticsMessageInterface;
  public activeUsers: AnalyticsUserInterface;
  public SENT_MESSAGES= SENT_MESSAGES;
  public RECEIVED_MESSAGES = RECEIVED_MESSAGES;
  public ACTIVE_USERS = ACTIVE_USERS;
  public BOT_REGION = BOT_REGION;

  constructor(private botDetailsService: BotDetailsService) {
    this.getBotInformation();
  }

  ngOnInit(): void {
  }

  getBotInformation() {
    this.botInfo = this.botDetailsService.getBot();
    this.botMessages = this.botInfo.analytics.message;
    this.activeUsers = this.botInfo.analytics.user;
  }

}
