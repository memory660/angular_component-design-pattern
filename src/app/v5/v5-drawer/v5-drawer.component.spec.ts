import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V5DrawerComponent } from './v5-drawer.component';

describe('V5DrawerComponent', () => {
  let component: V5DrawerComponent;
  let fixture: ComponentFixture<V5DrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V5DrawerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(V5DrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
