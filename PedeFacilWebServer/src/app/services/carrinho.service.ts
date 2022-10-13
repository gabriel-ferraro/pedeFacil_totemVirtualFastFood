import { Injectable } from '@angular/core';
import { Produto } from '../models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  itens: Produto[];

  constructor() {
    this.itens = [];
  }

  adicionarAoCarrinho(produto: Produto) {
    if (produto.qtde <= 0) {
      produto.qtde++;
      this.itens.push(produto);
      console.log('Adicionado ao carrinho');
    } else {
      produto.qtde++;
      console.log('somando item');
      console.log(this.itens);
    }
  }

  removerDoCarrinho(produto: Produto) {
    if(produto.qtde == 1){
      produto.qtde--;
      this.itens.splice(this.itens.indexOf(produto), 1);
      console.log('carrinho vazio');
      console.log(this.itens);
    } else if (produto.qtde > 1){
      produto.qtde--;
      console.log('subtraindo item')
      console.log(this.itens);
    }
  }

  listarItens() {
    return this.itens;
  }

  limparCarrinho() {
    this.itens = [];
    console.log('carrinho limpo');
    //return this.itens;
  }

  total(produto: Produto){
    return produto.qtde * produto.preco
  }

}
