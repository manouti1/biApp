using System;
using System.Collections.Generic;

namespace SimpleWebApp.Models
{
    public partial class AccountValue
    {
        public int AccountValueId { get; set; }
        public int AccountId { get; set; }
        public decimal? Amount { get; set; }
        public int? Year { get; set; }
        public Account Account { get; set; }
    }
}
