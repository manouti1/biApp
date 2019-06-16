using System;
using System.Collections.Generic;

namespace SimpleWebApp.Models
{
    public partial class Account
    {
        public Account()
        {
            AccountValue = new HashSet<AccountValue>();
        }

        public int AccountId { get; set; }
        public int? ParentAccountId { get; set; }
        public string Name { get; set; }

        public Account ParentAccount { get; set; }
        public ICollection<AccountValue> AccountValue { get; set; }
    }
}
