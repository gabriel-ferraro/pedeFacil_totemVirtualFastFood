import { ResponseProduto, RequestProduto } from './../models/produto.model';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Produto } from "../models/produto.model";

@Injectable({
    providedIn: 'root'
})
export class ProdutoService {

    constructor(protected http: HttpClient) { }

    listarProduto(): Observable<Produto[]> {
        var url = "https://localhost:5001/api/Produto";
        let response = this.http.get<Produto[]>(url);
        return response;
    }

    buscarProduto(id: string): Observable<ResponseProduto> {
        var url = "https://localhost:5001/api/Produto/" + id;
        return this.http.get<ResponseProduto>(url);
    }

    salvarProduto(produto: Produto): Observable<Produto> {
        var url = "https://localhost:5001/api/Produto";
        return this.http.post<Produto>(url, produto);

    }

    editarProduto(id: string, request: RequestProduto): Observable<ResponseProduto> {
        var url = "https://localhost:5001/api/Produto";
        return this.http.put<ResponseProduto>(url + "/" + id, request);
    }

    excluirProduto(id: string): Observable<Produto> {
        var url = "https://localhost:5001/api/Produto/" + id;
        return this.http.delete<Produto>(url);
    }

}
