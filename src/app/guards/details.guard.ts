import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { HOME_ROUTE } from "../shared/constants/route";
import { BotDetailsService } from "../shared/services/bot-details.service";

@Injectable({
  providedIn: 'root'
})

export class DetailsGuard implements CanActivate {
  constructor(
    private botDetailsService: BotDetailsService,
    private router: Router
    ) {
  }

  public canActivate(): boolean {
    const botSelected = this.botDetailsService.getBot();
    if (!botSelected) {
      this.router.navigate([HOME_ROUTE]);
      return false;
    } else {
      return true
    }
  }

}
