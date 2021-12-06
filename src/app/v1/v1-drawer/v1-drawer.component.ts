import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-v1-drawer',
  templateUrl: './v1-drawer.component.html',
  styleUrls: ['./v1-drawer.component.scss'],
})
export class V1DrawerComponent implements OnInit {
  @Input() isOpen = false;
  @Output() closed = new EventEmitter();

  close() {
    this.closed.emit();
  }

  constructor() {}

  ngOnInit(): void {}
}
