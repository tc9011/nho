import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCampComponent } from './my-camp.component';

describe('MyCampComponent', () => {
  let component: MyCampComponent;
  let fixture: ComponentFixture<MyCampComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyCampComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
