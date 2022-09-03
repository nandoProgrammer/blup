import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesLoginComponent } from './pages-login.component';

describe('PagesLoginComponentComponent', () => {
  let component: PagesLoginComponent;
  let fixture: ComponentFixture<PagesLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
