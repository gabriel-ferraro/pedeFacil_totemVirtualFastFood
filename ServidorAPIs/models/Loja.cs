
using System.Collections.Generic;

namespace models
{
    public class Loja
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Endereco { get; set; }
        public string Cnpj { get; set; }
    }
}

//dotnet-aspnet-codegenerator controller -name LojaController -m Loja -dc Context -api --relativeFolderPath Controllers