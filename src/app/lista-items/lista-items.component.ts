import { Component, OnInit } from '@angular/core';
import { items } from '../items';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-lista-items',
  templateUrl: './lista-items.component.html',
  styleUrls: ['./lista-items.component.css']
})
export class ListaItemsComponent implements OnInit {
  items = [];
  idActual: number;

  constructor(
    public rest: RestService
  ) { }

  ngOnInit(): void {
    this.items = items;
    this.idActual = items[items.length - 1].id;
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
    console.log('tacharItem lista')
    var index = items.findIndex(itemBorrar => itemBorrar.id == item.id);
    items[index].comprado = !item.comprado;
  }
}
