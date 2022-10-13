//Módulos da aplicação
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Angular material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';

//Componentes
import { AppComponent } from './app.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SeletorComponent } from './forma-pagamento/seletor/seletor.component';
import { StartButtonComponent } from './home/start-button/start-button.component';
import { FormaPagamentoComponent } from './forma-pagamento/forma-pagamento.component';
import { SidebarComponent } from './loja/sidebar/sidebar.component';
import { CardapioComponent } from './loja/cardapio/cardapio.component';
import { TransacaoAprovadaComponent } from './transacao-aprovada/transacao-aprovada.component';
import { TransacaoCanceladaComponent } from './transacao-cancelada/transacao-cancelada.component';
import { ConfirmarPedidoComponent } from './loja/confirmar-pedido/confirmar-pedido.component';
import { LojaComponent } from './loja/loja.component';
import { RealizarPagamentoComponent } from './realizar-pagamento/realizar-pagamento.component';
import { FormatoRealPipe } from './formato-real.pipe';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CarrinhoVazioComponent } from './carrinho/carrinho-vazio/carrinho-vazio.component';
import { StatusComponent } from './cadastro/status/status.component';
import { ProdutoComponent } from './cadastro/produto/produto.component';
import { ItemComponent } from './cadastro/item/item.component';
import { CriarProdutoComponent } from './cadastro/produto/criar-produto/criar-produto.component';
import { HamburgueresComponent } from './loja/hamburgueres/hamburgueres.component';
import { EditarProdutoComponent } from './cadastro/produto/editar-produto/editar-produto.component';
import { ExcluirProdutoComponent } from './cadastro/produto/excluir-produto/excluir-produto.component';


@NgModule({
  declarations: [
    AppComponent,
    CarrinhoComponent,
    HomeComponent,
    HeaderComponent,
    SeletorComponent,
    StartButtonComponent,
    FormaPagamentoComponent,
    SidebarComponent,
    CardapioComponent,
    TransacaoAprovadaComponent,
    TransacaoCanceladaComponent,
    ConfirmarPedidoComponent,
    LojaComponent,
    RealizarPagamentoComponent,
    FormatoRealPipe,
    CadastroComponent,
    CarrinhoVazioComponent,
    StatusComponent,
    ProdutoComponent,
    ItemComponent,
    CriarProdutoComponent,
    HamburgueresComponent,
    EditarProdutoComponent,
    ExcluirProdutoComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
