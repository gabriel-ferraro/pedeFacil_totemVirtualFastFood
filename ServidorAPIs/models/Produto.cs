namespace models
{
    public class Produto
    {
        public int Id { get; set; }
        public int Qtde { get; set; }
        public string Nome { get; set; }
        public decimal Preco { get; set; }
        public decimal Desconto { get; set; }
        public string Descricao { get; set; }
        public string Categoria { get; set; }
        public string Foto { get; set; }
    }
}

//dotnet-aspnet-codegenerator controller -name ProdutoController -m Produto -dc Context -api --relativeFolderPath Controllers