import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackToMainPageComponent } from './back-to-main-page.component';

describe('BackToMainPageComponent', () => {
  let component: BackToMainPageComponent;
  let fixture: ComponentFixture<BackToMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackToMainPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackToMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
