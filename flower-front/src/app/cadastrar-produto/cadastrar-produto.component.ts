import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormGroup } from "@angular/forms";
import { ProdutoService } from "../produto.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar-produto.component.html',
})
export class CadastrarProdutoComponent implements OnInit {
  formGroup: UntypedFormGroup;


  constructor(private _formBuilder: FormBuilder,
              private _service: ProdutoService,
              private _router: Router) {
  }

  ngOnInit() {
    this.formGroup = this.createForm();
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

  submitForm() {
    this._service.save(this.formGroup.getRawValue()).subscribe({
      next: () => {
        this._router.navigate(['/home']);
      }
    });
  }

  tratarImagem(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.result instanceof ArrayBuffer) {
        const byteArray = new Uint8Array(reader.result);
        this.formGroup.get('imagem').setValue(byteArray);
      } else {
        console.error('Erro ao ler o arquivo como ArrayBuffer.');
      }
    };

    reader.readAsArrayBuffer(file);
  }

}
