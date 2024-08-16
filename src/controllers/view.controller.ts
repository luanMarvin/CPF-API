import { Controller, Get } from '@nestjs/common';

@Controller('api')
export class View {
  @Get('cpf')
  getFile(): string {
    return `
      <!DOCTYPE html>
      <html lang="pt-br">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>API de Consulta de CPF</title>
      </head>
      <body>
        <h1>Bem-vindo à API de consulta de CPF!</h1>
        <p>Para consultar informações de um CPF, faça uma requisição POST para <code>/api/cpf</code>,
        enviando o CPF no corpo da requisição.</p>
        
        <h2>Exemplo de uso:</h2>
        <pre>
        POST /api/cpf
        Content-Type: application/json

        {
            "cpf": "12345678900"
        } 
        
        ou

        {
            "cpf": "123.456.789-00"
        }
        </pre>

        <p>Isso retornará um JSON dizendo se o CPF é válido ou não.</p>
      </body>
      </html>
    `;
  } 
}