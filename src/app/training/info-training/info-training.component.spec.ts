import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoTrainingComponent } from './info-training.component';

describe('InfoTrainingComponent', () => {
  let component: InfoTrainingComponent;
  let fixture: ComponentFixture<InfoTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoTrainingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
