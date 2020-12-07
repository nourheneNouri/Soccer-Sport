import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordCapComponent } from './word-cap.component';

describe('WordCapComponent', () => {
  let component: WordCapComponent;
  let fixture: ComponentFixture<WordCapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordCapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordCapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
