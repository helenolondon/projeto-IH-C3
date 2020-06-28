import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PratItemComponent } from './prat-item.component';

describe('PratItemComponent', () => {
  let component: PratItemComponent;
  let fixture: ComponentFixture<PratItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PratItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PratItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
