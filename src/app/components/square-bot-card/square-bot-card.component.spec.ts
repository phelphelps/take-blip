import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareBotCardComponent } from './square-bot-card.component';

describe('SquareBotCardComponent', () => {
  let component: SquareBotCardComponent;
  let fixture: ComponentFixture<SquareBotCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SquareBotCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SquareBotCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
