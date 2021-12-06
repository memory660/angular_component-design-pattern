import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V3DrawerComponent } from './v3-drawer.component';

describe('V3DrawerComponent', () => {
  let component: V3DrawerComponent;
  let fixture: ComponentFixture<V3DrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V3DrawerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(V3DrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
