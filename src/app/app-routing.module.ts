import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsGuard } from './guards/details.guard';
import { BotDetailsComponent } from './pages/bot-details/bot-details.component';
import { HomeComponent } from './pages/home/home.component';
import { BOT_DETAILS_ROUTE, HOME_ROUTE } from './shared/constants/route';

const routes: Routes = [
  { path: HOME_ROUTE, component: HomeComponent },
  { path: BOT_DETAILS_ROUTE, component: BotDetailsComponent, canActivate: [DetailsGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
