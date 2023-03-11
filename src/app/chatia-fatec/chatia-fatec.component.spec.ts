import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatiaFatecComponent } from './chatia-fatec.component';

describe('ChatiaFatecComponent', () => {
  let component: ChatiaFatecComponent;
  let fixture: ComponentFixture<ChatiaFatecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatiaFatecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatiaFatecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
