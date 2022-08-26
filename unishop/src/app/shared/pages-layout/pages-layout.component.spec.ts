import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesLayoutComponent } from './pages-layout.component';

describe('PagesLayoutComponent', () => {
  let component: PagesLayoutComponent;
  let fixture: ComponentFixture<PagesLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
