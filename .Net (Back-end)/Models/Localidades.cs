using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace REST.Models
{
    [Table("localidades")]
    public class Localidades
    {
        [Key]
        [Column(TypeName = "int")]
        public int cp { get; set; }

        [Required]
        [Column(TypeName = "varchar(60)")]
        public string localidad { get; set; }

    }
}
