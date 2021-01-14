import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListaItemsComponent } from './lista-items/lista-items.component';
import { PeticionApiComponent } from './peticion-api/peticion-api.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'listacompra', component: ListaItemsComponent },
  { path: 'consultaapi', component: PeticionApiComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
