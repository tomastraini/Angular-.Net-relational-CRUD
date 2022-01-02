using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace REST.Models
{
    [Table("usuarios")]
    public class Usuarios
    {
        [Key]
        [Column(TypeName = "int")]
        public int Id_usuario { get; set; }

        [Required]
        [Column(TypeName = "varchar(60)")]
        public string Usuario { get; set; }

        [Required]
        [Column(TypeName = "varchar(60)")]
        public string Pass { get; set; }

        [Required]
        [Column(TypeName = "varchar(60)")]
        public string Permiso { get; set; }

    }
}
