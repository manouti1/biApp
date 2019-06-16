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
    public class AccountValuesController : ControllerBase
    {
        private readonly AccountDBContext _context;

        public AccountValuesController(AccountDBContext context)
        {
            _context = context;
        }

        // GET: api/AccountValues
        [HttpGet]
        public IEnumerable<AccountValue> GetAccountValue()
        {
            return _context.AccountValue;
        }

        // GET: api/AccountValues/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetAccountValue([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var accountValue = await _context.AccountValue.FindAsync(id);

            if (accountValue == null)
            {
                return NotFound();
            }

            return Ok(accountValue);
        }

        // PUT: api/AccountValues/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAccountValue([FromRoute] int id, [FromBody] AccountValue accountValue)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != accountValue.AccountValueId)
            {
                return BadRequest();
            }

            _context.Entry(accountValue).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AccountValueExists(id))
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

        // POST: api/AccountValues
        [HttpPost]
        public async Task<IActionResult> PostAccountValue([FromBody] AccountValue accountValue)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.AccountValue.Add(accountValue);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (AccountValueExists(accountValue.AccountValueId))
                {
                    return new StatusCodeResult(StatusCodes.Status409Conflict);
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetAccountValue", new { id = accountValue.AccountValueId }, accountValue);
        }

        // DELETE: api/AccountValues/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAccountValue([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var accountValue = await _context.AccountValue.FindAsync(id);
            if (accountValue == null)
            {
                return NotFound();
            }

            _context.AccountValue.Remove(accountValue);
            await _context.SaveChangesAsync();

            return Ok(accountValue);
        }

        private bool AccountValueExists(int id)
        {
            return _context.AccountValue.Any(e => e.AccountValueId == id);
        }
    }
}