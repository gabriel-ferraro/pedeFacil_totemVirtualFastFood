using System;
using System.Text;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using BC = BCrypt.Net.BCrypt;

using PedeFacil.Data;
using models;

// dotnet add package BCrypt.Net-Next

//transforma a senha do usuário em hash para manter a transparência de visibilidade da senha
namespace PedeFacil.Services {

  public static class SenhaService {

    public static string GerarHash(string senha){
      return BC.HashPassword(senha);
    }

    public static bool CompararHash(string senhaEnviada, string hashBanco) {
      try {
        return BC.Verify(senhaEnviada, hashBanco);
      } catch (BCrypt.Net.SaltParseException){
        return false;
      }
    }
  }
}
