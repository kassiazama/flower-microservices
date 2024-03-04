import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ProdutoService } from "../produto.service";
import { FormBuilder, UntypedFormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit {

  id: any;
  form: UntypedFormGroup;
  formPedido: UntypedFormGroup;

  constructor(private _route: ActivatedRoute,
              private _service: ProdutoService,
              private _formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.createForm();
    this.formPedido = this.createFormPedido();

    this.id = this._route.snapshot.paramMap.get('id');

    this._service.getById(this.id).subscribe({
      next: p => this.form.reset(p)
    });

  }

  createForm() {
    return this._formBuilder.group({
      id: [null],
      nome: [null],
      descricao: [null],
      quantiaEstoque: [null],
      imagem: [null],
    })
  }

  createFormPedido() {
    return this._formBuilder.group({
      quantiaPedido: [null],
    })
  }

}
