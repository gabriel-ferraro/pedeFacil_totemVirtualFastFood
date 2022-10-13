import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(protected http: HttpClient) { }

  listarItem(): Observable<Item[]> {
    var url = "https://localhost:5001/api/Pedido";
    let response = this.http.get<Item[]>(url);
    return response;
  }

  excluirItem(id: number): Observable<Item> {
    var url = "https://localhost:5001/api/Pedido/" + id;
    return this.http.delete<Item>(url);
  }
}
