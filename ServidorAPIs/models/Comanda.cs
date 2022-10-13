using System.Collections.Generic;

namespace models
{
    public class Comanda
    {
        public int Id { get; set; }
        public string DescricaoPedido { get; set; }
        public Pedido Pedido { get; set; }
    }
}

//dotnet-aspnet-codegenerator controller -name ComandaController -m Comanda -dc Context -api --relativeFolderPath Controllers