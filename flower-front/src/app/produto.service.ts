import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private apiUrl = 'http://localhost:8082/flower-admin/api/produto';

  constructor(private http: HttpClient) { }

  getDados(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }

  getById(id: any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  save(produto: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, produto);
  }

}
