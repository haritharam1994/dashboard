import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetPipeComponent } from './widget-pipe.component';

describe('WidgetPipeComponent', () => {
  let component: WidgetPipeComponent;
  let fixture: ComponentFixture<WidgetPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetPipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
