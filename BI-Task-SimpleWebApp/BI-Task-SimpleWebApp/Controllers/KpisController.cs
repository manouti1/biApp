using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SimpleWebApp.Models;

namespace BI_Task_SimpleWebApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class KpisController : ControllerBase
    {
        private readonly AccountDBContext _context;
        private readonly IKpiResult _kpiResult;

        public KpisController(AccountDBContext context, IKpiResult kpi)
        {
            _kpiResult = kpi;
            _context = context;
        }

        // GET: api/Kpis
        [HttpGet]
        public IEnumerable<Kpi> GetKpi()
        {
            return _context.Kpi;
        }

        // GET: api/Kpis/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetKpi([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var kpi = await _context.Kpi.FindAsync(id);

            if (kpi == null)
            {
                return NotFound();
            }

            return Ok(kpi);
        }

        // PUT: api/Kpis/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutKpi([FromRoute] int id, [FromBody] Kpi kpi)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != kpi.Kpiid)
            {
                return BadRequest();
            }

            _context.Entry(kpi).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!KpiExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Kpis
        [HttpPost]
        public async Task<IActionResult> PostKpi([FromBody] Kpi kpi)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Kpi.Add(kpi);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (KpiExists(kpi.Kpiid))
                {
                    return new StatusCodeResult(StatusCodes.Status409Conflict);
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetKpi", new { id = kpi.Kpiid }, kpi);
        }

        // DELETE: api/Kpis/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteKpi([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var kpi = await _context.Kpi.FindAsync(id);
            if (kpi == null)
            {
                return NotFound();
            }

            _context.Kpi.Remove(kpi);
            await _context.SaveChangesAsync();

            return Ok(kpi);
        }

        private bool KpiExists(int id)
        {
            return _context.Kpi.Any(e => e.Kpiid == id);
        }

        // GET: api/Kpis/5
        [HttpGet("{id}")]
        public IActionResult ShowKpiResult(int id)
        {
            var x = _kpiResult.GetResult(id);
            return Ok(x);
        }

    }
}