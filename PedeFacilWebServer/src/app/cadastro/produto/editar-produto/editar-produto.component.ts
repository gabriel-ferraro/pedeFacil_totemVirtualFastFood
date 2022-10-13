import { ResponseProduto, RequestProduto } from './../../../models/produto.model';
import { ProdutoService } from './../../../services/produto.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.css']
})
export class EditarProdutoComponent implements OnInit {

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

  atualizar() {
    this.produtoService.editarProduto(this.id, this.request).subscribe(res => {
      
    });
  }
}