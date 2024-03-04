import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { HomeComponent } from './home/home.component';
import { DetalheComponent } from './detalhe/detalhe.component';
import { FinalizarComponent } from './finalizar/finalizar.component';
import { ReactiveFormsModule } from "@angular/forms";
import { ProdutoService } from "./produto.service";
import { HttpClientModule } from "@angular/common/http";
import { CadastrarProdutoComponent } from "./cadastrar-produto/cadastrar-produto.component";
import { PedidoService } from "./pedido.service";
import { ToastrModule, ToastrService } from "ngx-toastr";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    DetalheComponent,
    FinalizarComponent,
    CadastrarProdutoComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgOptimizedImage,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [ProdutoService, PedidoService, ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
