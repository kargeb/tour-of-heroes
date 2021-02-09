import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularRouterSampleComponent } from './angular-router-sample.component';

describe('AngularRouterSampleComponent', () => {
  let component: AngularRouterSampleComponent;
  let fixture: ComponentFixture<AngularRouterSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularRouterSampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularRouterSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
