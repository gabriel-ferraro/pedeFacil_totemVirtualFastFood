import { Component, OnInit } from '@angular/core';
import { Produto } from '../../models/produto.model';
import { Produtos } from '../../produtos';
import { CarrinhoService } from '../../services/carrinho.service';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent implements OnInit {

  produtos = Produtos;

  constructor(private carrinho: CarrinhoService) { }

  adicionarAoCarrinho(produto: Produto) {
    this.carrinho.adicionarAoCarrinho(produto);
  }

  removerDoCarrinho(produto: Produto) {
    if (produto.qtde > 0) {
      this.carrinho.removerDoCarrinho(produto);
    } else {
      console.log("não é possível remover  mais itens do carrinho");
    }
  }

  total(produto: Produto){
    this.carrinho.total(produto);
  }

  // limparCarrinho(){
  //   this.carrinho.limparCarrinho();
  // }

  ngOnInit(): void {
  }

}
