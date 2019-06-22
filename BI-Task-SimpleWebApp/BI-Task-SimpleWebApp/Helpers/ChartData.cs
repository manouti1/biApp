using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SimpleWebApp.Helpers
{
    public class ChartData
    {
        public Dictionary<int, double> data;
        public ChartData()
        {
            data = new Dictionary<int, double>();
        }

        public void AddValue(int year, double _value)
        {
            data.Add(year, _value);
        }

        public Dictionary<int, double> GetData()
        {
           return data;
        }

    }
}
