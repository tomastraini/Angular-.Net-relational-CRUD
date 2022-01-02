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
    public class contextoUsuarios : DbContext
    {
        public contextoUsuarios(DbContextOptions<contextoUsuarios> options) : base(options)
        {

        }
        public DbSet<Usuarios> Usuarios { get; set; }
    }
}
