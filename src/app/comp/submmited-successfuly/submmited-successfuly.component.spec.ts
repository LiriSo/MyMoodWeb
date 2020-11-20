import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmmitedSuccessfulyComponent } from './submmited-successfuly.component';

describe('SubmmitedSuccessfulyComponent', () => {
  let component: SubmmitedSuccessfulyComponent;
  let fixture: ComponentFixture<SubmmitedSuccessfulyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmmitedSuccessfulyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmmitedSuccessfulyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
