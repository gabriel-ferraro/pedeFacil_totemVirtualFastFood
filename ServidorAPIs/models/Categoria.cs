using System.Collections.Generic;

namespace models
{
    public class Categoria
    {
        public int Id { get; set; }
        public string Nome { get; set; }
    }
}

//dotnet-aspnet-codegenerator controller -name CategoriaController -m Categoria -dc Context -api --relativeFolderPath Controllers