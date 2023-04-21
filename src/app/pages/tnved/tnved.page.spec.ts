import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TnvedPage } from './tnved.page';

describe('TnvedPage', () => {
  let component: TnvedPage;
  let fixture: ComponentFixture<TnvedPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TnvedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
