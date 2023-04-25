import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalcResultPage } from './calc-result.page';

describe('CalcResultPage', () => {
  let component: CalcResultPage;
  let fixture: ComponentFixture<CalcResultPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CalcResultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
