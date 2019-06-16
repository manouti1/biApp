using System;
using System.Collections.Generic;

namespace SimpleWebApp.Models
{
    public partial class Kpi
    {
        public int Kpiid { get; set; }
        public string Name { get; set; }
        public string Formula { get; set; }
    }
}
