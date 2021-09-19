import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-flat-button',
  templateUrl: './flat-button.component.html',
  styleUrls: ['./flat-button.component.scss']
})
export class FlatButtonComponent {

  @Input() buttonText: string;
  @Output() buttonPressed = new EventEmitter();

  constructor() { }

  onPress() {
    this.buttonPressed.emit();
  }

}
