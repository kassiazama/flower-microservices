import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import { DetalheComponent } from "./detalhe/detalhe.component";
import { FinalizarComponent } from "./finalizar/finalizar.component";
import { CadastrarProdutoComponent } from "./cadastrar-produto/cadastrar-produto.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'detalhe/:id', component: DetalheComponent },
  { path: 'finalizar/:produto/:quantia', component: FinalizarComponent },
  { path: 'cadastrar', component: CadastrarProdutoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
