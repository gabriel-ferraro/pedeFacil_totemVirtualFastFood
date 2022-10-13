using System.Text.Json.Serialization;

namespace models
{
    public class TPDV
    {
        public int Id { get; set; }
        public string Login { get; set; }
        
        [JsonIgnore]
        public string Senha { get; set; }
        public string Papel { get; set; }
        public Loja Loja { get; set; }
    }
}

//dotnet-aspnet-codegenerator controller -name TPDVController -m TPDV -dc Context -api --relativeFolderPath Controllers