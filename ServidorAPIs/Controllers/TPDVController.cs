using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using models;
using PedeFacil.Data;
using PedeFacil.Services;

namespace PedeFacil.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TPDVController : ControllerBase
    {
        private readonly Context _context;

        public TPDVController(Context context)
        {
            _context = context;
        }

        [HttpPost]
        [Route("Login")]
        public ActionResult<dynamic> Login([FromBody] Credencial credencial)
        {
            // Localizar usuário no banco de dados.
            var usuario = _context.TPDVs.SingleOrDefault(u => u.Login == credencial.Login);

            // Verificar se o usuário existe na base e comparar as senhas.
            if (usuario == null || !SenhaService.CompararHash(credencial.Senha, usuario.Senha))
            {
                return NotFound(new { message = "Usuário ou senha inválidos" });
            }

            // Gerar o Token
            var token = TokenService.GerarToken(usuario);

            return new
            {
                usuario = usuario,
                token = token
            };
        }


        // GET: api/TPDV
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TPDV>>> GetTPDVs()
        {
            return await _context.TPDVs.ToListAsync();
        }

        // GET: api/TPDV/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TPDV>> GetTPDV(int id)
        {
            var tPDV = await _context.TPDVs.FindAsync(id);

            if (tPDV == null)
            {
                return NotFound();
            }

            return tPDV;
        }

        // PUT: api/TPDV/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTPDV(int id, [FromBody]Credencial credencial)
        {

            string senha = credencial.Senha;
            string hash = SenhaService.GerarHash(senha);

            TPDV tPDV = new TPDV();
            tPDV.Id = id;
            tPDV.Login = credencial.Login;
            tPDV.Papel = credencial.Papel;
            tPDV.Senha = hash;

            _context.Entry(tPDV).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TPDVExists(id))
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

        // POST: api/TPDV
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TPDV>> PostTPDV([FromBody] Credencial credencial)
        {

            string senha = credencial.Senha;
            string hash = SenhaService.GerarHash(senha);

            TPDV tPDV = new TPDV();
            tPDV.Login = credencial.Login;
            tPDV.Papel = credencial.Papel;
            tPDV.Senha = hash;

            _context.TPDVs.Add(tPDV);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTPDV", new { id = tPDV.Id }, tPDV);
        }

        // DELETE: api/TPDV/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTPDV(int id)
        {
            var tPDV = await _context.TPDVs.FindAsync(id);
            if (tPDV == null)
            {
                return NotFound();
            }

            _context.TPDVs.Remove(tPDV);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TPDVExists(int id)
        {
            return _context.TPDVs.Any(e => e.Id == id);
        }
    }
}
