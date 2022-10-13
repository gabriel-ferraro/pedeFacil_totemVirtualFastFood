import { Component, OnInit } from '@angular/core';
import { Produto } from '../../models/produto.model';
import { ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  constructor(private cadastroProduto: ProdutoService) { }

  ngOnInit(): void {
    this.listarProduto();
  }

  produto: Produto = {} as Produto;
  produtoFront: Produto[] = [];
  displayedColumns: string[] = ["id", "nome", "foto", "preco", "desconto", "descricao", "categoria", "acoes"];

  listarProduto() {
    this.cadastroProduto.listarProduto().subscribe(produtoBack => {
      this.produtoFront = produtoBack;
      //console.log(this.produtoFront);
    });
  }
}
