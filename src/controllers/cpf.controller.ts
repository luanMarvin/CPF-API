import { Controller, Get, Post, Body } from '@nestjs/common';

//Esse é o Script principal da aplicação, onde as formulas de verificação são apresentadas e usadas;
@Controller('api') // É possível acessar essa api diretamente pela url da aplicação na rota /api/cpf - Os métodos disponíveis são GET e POST;
export class CPFController {

  @Get('cpf') // Retorna um documento .html que pode ser interpretado pelos browser, ensinando a utilizar a aplicação;
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

  @Post('cpf') //Recebe na requisição em seu 'Body' o cpf como uma String e retorna uma JSON com data sendo ele do tipo boolean;
  cpfData(@Body('cpf') cpf: string): any {
    if(this.validateCPF(cpf)) {
      return { data: true };
    } else {
      return { data: false };
    }
  }

  private validateCPF(cpf: string): boolean { //Valida o CPF, as formulas estão contidas todas dentro dessa função, e caso alguma apresente erro retorna false;
    const cpfClean = cpf.replace(/[.-]/g, '').trim();

    const sumCheck = (strCpf: string): boolean => {
      try {
        const numCPF = strCpf.split('').reduce((acc, digito) => acc + parseInt(digito, 10), 0); //Dessa forma, é possivel realizar a soma dos digitos do cpf, é necessário se atentar ao transformar CPF do tipo String para Number, pois é possivel perder o primeiro digito caso seja 0;
        const sumCpf = numCPF.toString();
        if(sumCpf[0] === sumCpf[1]){ // Verifica se os 2 digitos são iguais
          return true;
        };
      } catch(e) {
        return false;
      };
    };
    
    //const dv1Check = (strCpf: string) => {} Para melhorar a aplicação, farei o algoritmo de verificação dos ultimos 2 digitos;
    //const dv2Check = (strCpf: string) => {} numa segunda abordagem, o retorno irá tambem retornar o estado do CPF;

    if(cpfClean.length == 11 && sumCheck(cpfClean)){
      return true;
    } else return false;
  };
};
