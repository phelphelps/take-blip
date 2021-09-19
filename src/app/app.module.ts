import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WideBotCardComponent } from './components/wide-bot-card/wide-bot-card.component';
import { SquareBotCardComponent } from './components/square-bot-card/square-bot-card.component';
import { HomeComponent } from './pages/home/home.component';
import { ListManagerComponent } from './components/list-manager/list-manager.component';
import { CreatedAtPipe } from './shared/pipes/created-at.pipe';
import { FlatButtonComponent } from './components/flat-button/flat-button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BotDetailsComponent } from './pages/bot-details/bot-details.component';
import { DashboardItemComponent } from './components/dashboard-item/dashboard-item.component';

@NgModule({
  declarations: [
    AppComponent,
    WideBotCardComponent,
    SquareBotCardComponent,
    HomeComponent,
    ListManagerComponent,
    CreatedAtPipe,
    FlatButtonComponent,
    BotDetailsComponent,
    DashboardItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
