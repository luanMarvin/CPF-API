import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('api')
export class CPFController {

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
        </pre>

        <p>Isso retornará se o CPF é válido ou não.</p>
      </body>
      </html>
    `;
  }

  @Post('cpf')
  cpfData(@Body('cpf') cpf: string): any {
    if(this.validateCPF(cpf)) {
      return { data: true };
    } else
    {
      return { data: false }
    }
  }

  private validateCPF(cpf: string): boolean {
    const cpfClean = cpf.replace(/[.-]/g, '').trim();

    const sumCheck = (strCpf: string): boolean => {
      try {
        const numCPF = strCpf.split('').reduce((acc, digito) => acc + parseInt(digito, 10), 0);
        const sumCpf = numCPF.toString()
        if(sumCpf[0] === sumCpf[1]){
          return true
        }
      } catch(e) {
        return false;
      }
    }
    const dv1Check = (strCpf: string) => {}
    const dv2Check = (strCpf: string) => {}

    if(cpfClean.length == 11 && sumCheck(cpfClean)){
      return true;
    } else return false;
  }
}
