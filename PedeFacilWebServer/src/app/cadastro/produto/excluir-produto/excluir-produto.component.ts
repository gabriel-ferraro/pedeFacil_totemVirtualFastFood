import { ProdutoService } from './../../../services/produto.service';
import { RequestProduto } from './../../../models/produto.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-excluir-produto',
  templateUrl: './excluir-produto.component.html',
  styleUrls: ['./excluir-produto.component.css']
})
export class ExcluirProdutoComponent implements OnInit {

  id!: any;
  request!: RequestProduto;

  constructor(private produtoService: ProdutoService, private rota: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.rota.snapshot.paramMap.get('id');
    this.produtoService.buscarProduto(this.id).subscribe(res => {
      this.request = {
        nome: res.nome,
        preco: res.preco,
        foto: res.foto,
        desconto: res.desconto,
        descricao: res.descricao,
        categoria: res.categoria,
        id: res.id,
        qtde: res.qtde
      }
    });
  }

  excluir() {
    this.produtoService.excluirProduto(this.id).subscribe(res => {
      
    });
  }

}
