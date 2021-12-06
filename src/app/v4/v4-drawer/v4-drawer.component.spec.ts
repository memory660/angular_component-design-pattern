import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V4DrawerComponent } from './v4-drawer.component';

describe('V4DrawerComponent', () => {
  let component: V4DrawerComponent;
  let fixture: ComponentFixture<V4DrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V4DrawerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(V4DrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
