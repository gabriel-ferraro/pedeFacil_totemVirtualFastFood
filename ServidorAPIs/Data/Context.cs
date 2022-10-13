using Microsoft.EntityFrameworkCore;
using models;

namespace PedeFacil.Data
{
    public class Context : DbContext
    {
        public DbSet<Loja> Lojas { get; set; }
        public DbSet<TPDV> TPDVs { get; set; }
        public DbSet<Status> Status { get; set; }
        public DbSet<Pedido> Pedidos { get; set; }
        public DbSet<Comanda> Comandas { get; set; }
        public DbSet<Produto> Produtos { get; set; }
        public DbSet<Categoria> Categorias { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder builder)
        {
            builder.UseSqlServer(@"Server=(localdb)\mssqllocaldb;Database=PedeFacilDB;Integrated Security=True");
        }
    }
}