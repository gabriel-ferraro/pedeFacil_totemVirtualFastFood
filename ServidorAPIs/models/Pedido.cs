using System;
using System.Collections.Generic;

namespace models
{
    public class Pedido
    {
        public int Id { get; set; }
        public List<Produto> Produto { get; set; }
    }
}

//dotnet-aspnet-codegenerator controller -name PedidoController -m Pedido -dc Context -api --relativeFolderPath Controllers