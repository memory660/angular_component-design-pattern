import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-v3-drawer',
  templateUrl: './v3-drawer.component.html',
  styleUrls: ['./v3-drawer.component.scss'],
})
export class V3DrawerComponent implements OnInit {
  @Input() isOpen = false;
  @Input() width: number = 400;
  @Input() position: 'left' | 'right' = 'right';
  @Output() drawerClosed = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  close() {
    this.drawerClosed.emit();
  }

  get drawerStyles() {
    const commonStyles = { width: `${this.width}px` };
    if (this.position == 'right') {
      return {
        ...commonStyles,
        right: `${this.isOpen ? 0 : -1 * this.width}px`,
      };
    } else {
      return {
        ...commonStyles,
        left: `${this.isOpen ? 0 : -1 * this.width}px`,
      };
    }
  }
}
