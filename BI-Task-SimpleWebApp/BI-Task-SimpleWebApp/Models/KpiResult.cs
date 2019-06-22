using SimpleWebApp.Helpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Z.Expressions;

namespace SimpleWebApp.Models
{
    public interface IKpiResult
    {
        Dictionary<int, double> GetResult(int id);    
    }
    public class KpiResult : IKpiResult
    {
        ExpressionEvaluator evaluator;

        private readonly AccountDBContext _context;
        public KpiResult(AccountDBContext context) {
           
            _context = context;
            evaluator = new ExpressionEvaluator();
        }

        public Dictionary<int, double> GetResult(int id)
        {
            List<int> years = _context.AccountValue.Select(e => e.Year).Distinct().Cast<int>().ToList();
            Kpi _kpi = _context.Kpi.Where(e => e.Kpiid == id).FirstOrDefault();
            
            ChartData chartData = new ChartData();

            if (_kpi != null)
            {
                string formula = _kpi.Formula;

                string[] accounts = formula.Split(new char[] {'/','*','+','-' });
                for (int i = 0; i < years.Count; i++)
                {
                    evaluator.ClearVariables();
                    foreach (string account in accounts) {
                        var isNumeric = double.TryParse(account, out double n);
                        if (!isNumeric)
                        {
                            Account ac = _context.Account.Where(acc => acc.Name == account).FirstOrDefault();
                            AccountValue value = _context.AccountValue.Where(val => val.AccountId == ac.AccountId && val.Year == years[i]).FirstOrDefault();
                            evaluator.AddVariable(ac.Name, value.Amount.ToString());
                        }
                    }
                    chartData.AddValue(years[i],evaluator.EvaluateExpression(_kpi.Formula));
                }
            }
            return chartData.GetData();
            
 
        }
    }
}
