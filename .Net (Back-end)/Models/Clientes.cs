using Microsoft.EntityFrameworkCore;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace REST.Models
{
    [Table("Clientes")]
    public class Clientes
    {

        [Key]
        [Column(TypeName = "int")]
        public int id_cliente { get; set; }

        [Required]
        [Column(TypeName = "varchar(60)")]
        public string razon_social { get; set; }

        [Required]
        [Column(TypeName = "varchar(60)")]
        public string telefono { get; set; }

        [ForeignKey("localidades")]
        public int cp { get; set; }
    }
}