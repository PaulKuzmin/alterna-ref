import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AutocalcPage } from './autocalc.page';

describe('AutocalcPage', () => {
  let component: AutocalcPage;
  let fixture: ComponentFixture<AutocalcPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AutocalcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
