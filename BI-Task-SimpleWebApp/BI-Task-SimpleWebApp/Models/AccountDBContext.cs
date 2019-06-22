using System;
using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.Extensions.Configuration;

namespace SimpleWebApp.Models
{
    public partial class AccountDBContext : DbContext
    {
        public AccountDBContext()
        {
        }

        public AccountDBContext(DbContextOptions<AccountDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Account> Account { get; set; }
        public virtual DbSet<AccountValue> AccountValue { get; set; }
        public virtual DbSet<Kpi> Kpi { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var builder = new ConfigurationBuilder().SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json");

            var configuration = builder.Build();
            var connectionString = configuration.GetConnectionString("AccountDBConnection");


            if (!optionsBuilder.IsConfigured)
            {
                //#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer(connectionString);
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Account>(entity =>
            {
                entity.Property(e => e.AccountId).ValueGeneratedNever();

                entity.Property(e => e.Name).HasMaxLength(200);

            });

            modelBuilder.Entity<AccountValue>(entity =>
            {
                entity.Property(e => e.AccountValueId).ValueGeneratedNever();

                entity.HasOne(d => d.Account)
                    .WithMany(p => p.AccountValue)
                    .HasForeignKey(d => d.AccountId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_AccountValue_Account");
            });

            modelBuilder.Entity<Kpi>(entity =>
            {
                entity.ToTable("KPI");

                entity.Property(e => e.Kpiid)
                    .HasColumnName("KPIId")
                    .ValueGeneratedNever();

                entity.Property(e => e.Name).HasMaxLength(200);
            });
        }
    }
}
