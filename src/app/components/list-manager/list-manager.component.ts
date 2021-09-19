import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BLOCKS_VIEW, LIST_VIEW } from 'src/app/shared/constants/layout';
import { ORDER_BY_CREATION, ORDER_BY_NAME } from 'src/app/shared/constants/order';
import { BotManagerService } from 'src/app/shared/services/bot-manager.service';
import { OrderBotsService } from 'src/app/shared/services/order-bots.service';

@Component({
  selector: 'app-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.scss'],
})
export class ListManagerComponent implements OnInit {
  @Output() layoutModeChange = new EventEmitter();

  public blocksView: string = BLOCKS_VIEW;
  public listView: string = LIST_VIEW;
  public byName: string = ORDER_BY_NAME;
  public byCreation: string = ORDER_BY_CREATION;
  public searchForm: FormControl;
  private searchInputSubscriber: any;

  constructor(
    private orderBotService: OrderBotsService,
    private botManagerService: BotManagerService
    ) {
    this.searchForm = new FormControl();
  }

  ngOnInit(): void {
    this.searchInputSubscriber = this.searchForm.valueChanges.subscribe(searchInput => {
      this.botManagerService.setSearchInput(searchInput);
    })
  }

  changeViewMode(mode: string) {
    this.layoutModeChange.emit(mode);
  }

  order(orderMethod: string) {
    this.orderBotService.changeOrderMode(orderMethod);
  }
}
