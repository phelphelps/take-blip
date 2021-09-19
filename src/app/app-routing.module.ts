import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BotDetailsComponent } from './pages/bot-details/bot-details.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'details', component: BotDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
