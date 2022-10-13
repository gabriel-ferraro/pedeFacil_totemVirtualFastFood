import { ProdutoService } from './../../../services/produto.service';
import { Produto } from './../../../models/produto.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-criar-produto',
  templateUrl: './criar-produto.component.html',
  styleUrls: ['./criar-produto.component.css']
})
export class CriarProdutoComponent implements OnInit {

  produto: Produto = {} as Produto;

  constructor(private cadastroProduto: ProdutoService ) { }

  ngOnInit(): void {
  }

  salvarProduto() {
    this.cadastroProduto.salvarProduto(this.produto).subscribe();
  }

}
