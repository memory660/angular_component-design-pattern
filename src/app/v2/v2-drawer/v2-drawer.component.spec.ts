import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V2DrawerComponent } from './v2-drawer.component';

describe('V2DrawerComponent', () => {
  let component: V2DrawerComponent;
  let fixture: ComponentFixture<V2DrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V2DrawerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(V2DrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
