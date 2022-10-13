namespace models
{
    public class Status
    {
        public int Id { get; set; }
        public string Nome { get; set; }
    }
}

//dotnet-aspnet-codegenerator controller -name StatusController -m Status -dc Context -api --relativeFolderPath Controllers