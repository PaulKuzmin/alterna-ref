import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AutocalcResultPage } from './autocalc-result.page';

describe('AutocalcResultPage', () => {
  let component: AutocalcResultPage;
  let fixture: ComponentFixture<AutocalcResultPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AutocalcResultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
