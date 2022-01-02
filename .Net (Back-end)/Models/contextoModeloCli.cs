using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using REST.Models;

using Microsoft.EntityFrameworkCore.Metadata;

namespace REST.Models
{
   
    public class contextoModeloCli: DbContext
    {
        public contextoModeloCli(DbContextOptions<contextoModeloCli> options): base(options)
        {
            
        }
        public DbSet<Clientes> clientes { get; set; }
        public DbSet<Localidades> Localidades { get; set; }
        
    }
}
