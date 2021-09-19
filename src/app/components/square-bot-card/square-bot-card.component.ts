import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-square-bot-card',
  templateUrl: './square-bot-card.component.html',
  styleUrls: ['./square-bot-card.component.scss'],
})
export class SquareBotCardComponent implements OnInit {
  @Input() botName: string;
  @Input() botTemplate: string;
  @Input() botImage: any;
  @Input() isFavorite: boolean;

  @Output() itemPressed = new EventEmitter();
  @Output() toggleFavoriteEvent = new EventEmitter();

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.botImage = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.botImage
    );
  }

  toggleFavorite() {
    this.toggleFavoriteEvent.emit({
      isFavorite: this.isFavorite ? false : true,
    });
  }

  itemPressedEvent() {
    this.itemPressed.emit()
  }
}
