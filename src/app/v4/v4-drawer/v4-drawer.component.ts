import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-v4-drawer',
  templateUrl: './v4-drawer.component.html',
  styleUrls: ['./v4-drawer.component.scss'],
  exportAs: 'drawer', // -----  declarer ici  -----
})
export class V4DrawerComponent implements OnInit {
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
