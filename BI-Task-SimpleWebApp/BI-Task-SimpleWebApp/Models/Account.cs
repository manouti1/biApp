using System;
using System.Collections.Generic;

namespace SimpleWebApp.Models
{
    public partial class Account
    {
        public Account()
        {
            //AccountValue = new HashSet<AccountValue>();
            //InverseParentAccount = new HashSet<Account>();
        }

        public int AccountId { get; set; }
        public int? ParentAccountId { get; set; }
        public string Name { get; set; }

        // public Account ParentAccount { get; set; }
        //public ICollection<AccountValue> AccountValue { get; set; }
        //public ICollection<Account> InverseParentAccount { get; set; }
    }
}
