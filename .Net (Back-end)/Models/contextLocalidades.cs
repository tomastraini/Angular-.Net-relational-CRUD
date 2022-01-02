using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace REST.Models
{
    
    public class contextLocalidades: DbContext
{
    public contextLocalidades(DbContextOptions<contextLocalidades> options) : base(options)
    {

    }
    public DbSet<Localidades> localidades { get; set; }
}
}
