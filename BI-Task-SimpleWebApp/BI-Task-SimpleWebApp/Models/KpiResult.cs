using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Z.Expressions;

namespace SimpleWebApp.Models
{
    public interface IKpiResult
    {
        Task<Dictionary<int, float>> GetResult(int id);
            
    }
    public class KpiResult : IKpiResult
    {
        public Dictionary<int, float> result;
        private readonly AccountDBContext _context;
        public KpiResult(AccountDBContext context) {
            result = new Dictionary<int, float>();
            _context = context;
        }

        public void FillResult()
        {
            
        }

        public async Task<Dictionary<int,float>> GetResult(int id)
        {
            //List<int> years = new List<int>();
            List<int?> years = _context.AccountValue.Select(e => e.Year).Distinct().ToList();
            
            Kpi _kpi = _context.Kpi.Where(e => e.Kpiid == id).FirstOrDefault();

            if (_kpi != null)
            {
                string formula = _kpi.Formula;
                string[] accounts = formula.Split("/*-+");

                foreach (string account in accounts)
                { 
                   //Eval.Execute<float>()

                }
                
            }

        }
    }
}
