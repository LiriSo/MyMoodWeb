import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LirisComponent } from './liris.component';

describe('LirisComponent', () => {
  let component: LirisComponent;
  let fixture: ComponentFixture<LirisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LirisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LirisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
