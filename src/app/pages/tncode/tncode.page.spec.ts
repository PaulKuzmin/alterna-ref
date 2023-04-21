import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TncodePage } from './tncode.page';

describe('TncodePage', () => {
  let component: TncodePage;
  let fixture: ComponentFixture<TncodePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TncodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
