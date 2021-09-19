import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  templateUrl: './dashboard-item.component.html',
  styleUrls: ['./dashboard-item.component.scss']
})
export class DashboardItemComponent implements OnInit {
  @Input() icon: string;
  @Input() description: string;
  @Input() quantity: number;
  @Input() color: string;

  @Output() itemPressed = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
