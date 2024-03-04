import { Component, OnInit } from '@angular/core';
import { ProdutoService } from "../produto.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: any[] = [];

  constructor(private _service: ProdutoService,
              private _router: Router) {
  }

  ngOnInit() {
    this._service.getDados().subscribe({
      next: p => this.products = p
    });

  }

  showDetails(id: number) {
    this._router.navigate([`/detalhe/${id}`]);
  }
}
