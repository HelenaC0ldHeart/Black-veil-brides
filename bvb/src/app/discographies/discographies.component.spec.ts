import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscographiesComponent } from './discographies.component';

describe('DiscographiesComponent', () => {
  let component: DiscographiesComponent;
  let fixture: ComponentFixture<DiscographiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscographiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscographiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
