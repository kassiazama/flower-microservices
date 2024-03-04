import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { take } from "rxjs";
import { PedidoService } from "../pedido.service";

@Component({
  selector: 'app-finalizar',
  templateUrl: './finalizar.component.html',
  styleUrls: ['./finalizar.component.css']
})
export class FinalizarComponent implements OnInit {
  formGroup: UntypedFormGroup;
  produtoId: string;
  quantia: string;

  constructor(private _formBuilder: FormBuilder,
              private _activatedRoute: ActivatedRoute,
              private _router: Router,
              private _service: PedidoService) {
  }

  ngOnInit() {
    this.produtoId = this._activatedRoute.snapshot.paramMap.get('produto');
    this.quantia = this._activatedRoute.snapshot.paramMap.get('quantia');
    this.formGroup = this.createForm();
  }

  createForm() {
    return this._formBuilder.group({
      nomeCompleto: [null],
      email: [null],
      produtoId: [null],
      quantiaPedido: [null],
      logradouro: [null],
      numero: [null],
      complemento: [null],
      bairro: [null],
      cidade: [null],
      estado: [null],
    })
  }

  submitForm() {
    this.formGroup.get('produtoId').setValue(this.produtoId);
    this.formGroup.get('quantiaPedido').setValue(this.quantia);
    this._service.save(this.formGroup.getRawValue()).subscribe({
      next: () => {
        this._router.navigate(['/home']);
      }
    });
  }

}
