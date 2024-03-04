import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private apiUrl = 'http://localhost:8082/flower-pedido/api/pedido';

  constructor(private http: HttpClient) { }

  save(pedido: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, pedido);
  }

}
