import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WideBotCardComponent } from './wide-bot-card.component';

describe('WideBotCardComponent', () => {
  let component: WideBotCardComponent;
  let fixture: ComponentFixture<WideBotCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WideBotCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WideBotCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
