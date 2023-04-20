import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlternaPage } from './alterna.page';

describe('AlternaPage', () => {
  let component: AlternaPage;
  let fixture: ComponentFixture<AlternaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AlternaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
