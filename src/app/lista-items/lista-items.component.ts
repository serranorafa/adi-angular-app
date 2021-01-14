import { Component, OnInit } from '@angular/core';
import { items } from '../items';

@Component({
  selector: 'app-lista-items',
  templateUrl: './lista-items.component.html',
  styleUrls: ['./lista-items.component.css']
})
export class ListaItemsComponent implements OnInit {
  items = [];
  idActual: number;

  constructor() { }

  ngOnInit(): void {
    this.items = items;
    this.idActual = items[this.items.length - 1].id;
  }

  anyadirItem(): void {
    let producto = (<HTMLInputElement>document.getElementById('producto')).value;

    if (producto) {
      this.idActual++;
      const item = { id: this.idActual, nombre: producto, comprado: false }
      items.push(item);
      (<HTMLInputElement>document.getElementById('producto')).value = '';
    }
  }

  borrarItem(item) {
    var index = items.findIndex(itemBorrar => itemBorrar.id == item.id);
    items.splice(index, 1);
  }

  tacharItem(item) {
    var index = items.findIndex(itemTachar => itemTachar.id == item.id);
    items[index].comprado = !item.comprado;
  }

}
