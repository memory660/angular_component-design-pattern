import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-v5-drawer',
  templateUrl: './v5-drawer.component.html',
  styleUrls: ['./v5-drawer.component.scss'],
  exportAs: 'drawer',
})
export class V5DrawerComponent implements OnInit {
  @Input() isOpen = false;
  @Input() position: 'left' | 'right' = 'right';
  @Output() drawerClosed = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  close() {
    this.drawerClosed.emit();
  }
}
