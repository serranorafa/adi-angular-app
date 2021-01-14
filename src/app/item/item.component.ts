import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() id: number;
  @Input() nombre: string;
  @Input() comprado: boolean;
  @Output() childEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  borrarItem() {
    this.childEvent.emit(this)
  }

}
