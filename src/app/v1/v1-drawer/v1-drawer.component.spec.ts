import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V1DrawerComponent } from './v1-drawer.component';

describe('V1DrawerComponent', () => {
  let component: V1DrawerComponent;
  let fixture: ComponentFixture<V1DrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V1DrawerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(V1DrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
