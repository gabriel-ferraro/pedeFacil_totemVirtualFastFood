import { ExcluirProdutoComponent } from './cadastro/produto/excluir-produto/excluir-produto.component';
//import { EditarProdutoComponent } from './cadastro/produto/editar-produto/editar-produto.component';
import { CriarProdutoComponent } from './cadastro/produto/criar-produto/criar-produto.component';
import { ItemComponent } from './cadastro/item/item.component';
import { ProdutoComponent } from './cadastro/produto/produto.component';
import { StatusComponent } from './cadastro/status/status.component';
import { RealizarPagamentoComponent } from './realizar-pagamento/realizar-pagamento.component';
import { FormaPagamentoComponent } from './forma-pagamento/forma-pagamento.component';
import { TransacaoCanceladaComponent } from './transacao-cancelada/transacao-cancelada.component';
import { TransacaoAprovadaComponent } from './transacao-aprovada/transacao-aprovada.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { LojaComponent } from './loja/loja.component';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HamburgueresComponent } from './loja/hamburgueres/hamburgueres.component';

import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarProdutoComponent } from './cadastro/produto/editar-produto/editar-produto.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "loja", component: LojaComponent },
  { path: "carrinho", component: CarrinhoComponent },
  { path: "formaPagamento", component: FormaPagamentoComponent },
  { path: "transacaoAprovada", component: TransacaoAprovadaComponent },
  { path: "transacaoCancelada", component: TransacaoCanceladaComponent },
  { path: "realizarPagamento", component: RealizarPagamentoComponent },
  {
    path: "loja", component: LojaComponent,
    children: [
      { path: "hamburgueres", component: HamburgueresComponent},
    ],
  },
  {
    path: "cadastro", component: CadastroComponent,
    children: [
      //status
      { path: "status", component: StatusComponent },
      //produto
      { path: "produto", component: ProdutoComponent },
      { path: "produto/produtoCriar", component: CriarProdutoComponent },
      { path: "produto/produtoEditar/:id", component: EditarProdutoComponent },
      { path: "produto/produtoExcluir/:id", component: ExcluirProdutoComponent},
      //pedido
      { path: "item", component: ItemComponent },
      //{ path: "item/itemExcluir", component: ExcluirItemComponent },
    ],
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
