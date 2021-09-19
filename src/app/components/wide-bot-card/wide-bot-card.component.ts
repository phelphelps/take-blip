import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-wide-bot-card',
  templateUrl: './wide-bot-card.component.html',
  styleUrls: ['./wide-bot-card.component.scss']
})
export class WideBotCardComponent implements OnInit {

  @Input() botName: string;
  @Input() botCreatedDate: string;
  @Input() botImage: SafeResourceUrl | string;
  @Input() isFavorite: boolean;

  @Output() toggleFavoriteEvent = new EventEmitter();

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.botImage = this.sanitizer.bypassSecurityTrustResourceUrl(String(this.botImage));
  }

  toggleFavorite() {
    this.toggleFavoriteEvent.emit({
      isFavorite: this.isFavorite ? false : true,
    });
  }

}
