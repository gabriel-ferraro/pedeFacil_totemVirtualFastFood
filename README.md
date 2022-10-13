## Projeto Pedefacil
Simulando um sistema de totem de pedidos de uma rede de fastFood

## Integrantes
Gabriel Ferraro<br>
Athos Matovani

## Rodar webApi

npm start em ServidorAPIs

## Homepage

![plot](./homePage.png)

## Carrinho

![plot](./confirmar.png)

## Confirmar Compra

![plot](./formaPagamento.png)

## Conteúdos

- API desenvolvida em C#
- WebServer Angular
- Visual com Angular Material
- Base de dados SQL server

### 1 Comandos para criação do projeto Web API
dotnet new webapi -o PedeFacil<br>
cd PedeFacil<br>
dotnet restore<br>
### 2 Comandos para instalação do EntityFramework
dotnet add package Microsoft.EntityFrameworkCore<br>
dotnet add package Microsoft.EntityFrameworkCore.SqlServer<br>
dotnet add package Microsoft.EntityFrameworkCore.Design<br>
### 3 Comandos para geração do banco de dados
dotnet tool install --global dotnet-ef<br>
dotnet ef migrations add Initial<br>
dotnet ef database update<br>
### 4 Comandos para geração automática de WebAPIs
dotnet tool install -g dotnet-aspnet-codegenerator<br>
dotnet add package Microsoft.VisualStudio.Web.CodeGeneration.Design<br>
dotnet-aspnet-codegenerator controller -name UsuarioController -m Usuario -dc PediPDVContext -api --relativeFolderPath Controllers<br>
### 5 Comandos para instalação dos pacotes JWT
dotnet add package Microsoft.AspNetCore.Authentication<br>
dotnet add package Microsoft.AspNetCore.Authentication.JwtBearer<br>
dotnet add package BCrypt.Net-Next<br>
### 6 Comando para execução da aplicação
dotnet watch run<br>
