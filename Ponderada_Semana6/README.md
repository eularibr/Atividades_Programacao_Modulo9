# Atividades_Programacao_Modulo9

# Ponderada de Programação - Tratamento de Dados (Semana 6)
<div align="center">
  
![Untitled](https://github.com/eularibr/Atividades_Programacao_Modulo9/blob/main/Ponderada_Semana6/assets/Ponderada1.png)

![Untitled](https://github.com/eularibr/Atividades_Programacao_Modulo9/blob/main/Ponderada_Semana6/assets/Ponderada2.png)
</div>

As imagens acima, são referentes a uma das partes da estrutura da API do projeto, feita no Visual Studio 2022. O Cid2023Repository é uma classe que implementa a interface ICid2023Repository, destinada a acessar e manipular dados relacionados ao modelo Cid2023 no contexto de uma aplicação Web API usando Entity Framework Core. Esta classe possui métodos assíncronos para recuperar informações sobre registros Cid2023 da base de dados. O método GetAsync retorna uma lista de todos os registros Cid2023 mapeados para Cid2023DTO, enquanto o método GetByUniAsync filtra os registros com base em uma unidade específica.

Além disso, o Cid2023Repository oferece um método adicional, GetColaboradoresAtestadosPorUnidadeAsync, que realiza uma operação de agrupamento na base de dados para contabilizar o número de colaboradores e a quantidade total de atestados por unidade. O resultado é mapeado para um dicionário onde a chave é a unidade e o valor é um objeto UnidadeAtestados, que contém as contagens de colaboradores e atestados correspondentes.

Internamente, a classe mantém uma instância de ConnectionContext para interagir com o banco de dados. Os métodos assíncronos utilizam LINQ para consultar os dados e projetá-los em DTOs apropriados, facilitando o transporte de informações entre a camada de infraestrutura e a camada de aplicação da Web API.

<div align="center">
  
![Untitled](https://github.com/eularibr/Atividades_Programacao_Modulo9/blob/main/Ponderada_Semana6/assets/Ponderada3.png)

</div>

Essa é a estrutura que estamos seguindo para o nosso projeto:

<div align="center">
  
![Untitled](https://github.com/eularibr/Atividades_Programacao_Modulo9/blob/main/Ponderada_Semana6/assets/Ponderada4.png)

</div>

Aqui é onde a integração da API pode ser executada

<div align="center">

![Untitled](https://github.com/eularibr/Atividades_Programacao_Modulo9/blob/main/Ponderada_Semana6/assets/Ponderada5.png)

</div>

<div align="center">
  
![Untitled](https://github.com/eularibr/Atividades_Programacao_Modulo9/blob/main/Ponderada_Semana6/assets/Ponderada6.png)

</div>

Essa é a tela em que é possível ver como está a nossa API e quais dados estão retornando

<div align="center">
  
![Untitled](https://github.com/eularibr/Atividades_Programacao_Modulo9/blob/main/Ponderada_Semana6/assets/Ponderada7.png)

</div>

Código que aplica a média de atestados e colaboradores do gráfico:

```csharp
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { enviroment } from './enviroment';
import { ApiconnectService } from './services/apiconnect.service';
import { HttpResponse } from '@angular/common/http';
import { UnidadeResponse } from './models/interfaces/Iunidade';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dashboard-polo';
  apiUrl: string | undefined;

  constructor(private apiConnect: ApiconnectService) {
    this.apiUrl = enviroment.apiUrl;
    console.log(this.apiUrl);
  }

  ngOnInit() {
    // Chame a função da API para obter os dados
    this.apiConnect.getCid2023EmployeesCertificate().subscribe((response: HttpResponse<UnidadeResponse>) => {
      const data = response.body;
      // Verifique se os dados foram recebidos corretamente
      console.log(data);

      // Acesse os campos numéricos dentro dos objetos AtestadoInfo
      const TBT = data?.TBT?.colaboradores || 0;
      const ANC = data?.ANC?.colaboradores || 0;
      const SJP = data?.SJP?.colaboradores || 0;
      const SCA = data?.SCA?.colaboradores || 0;

      console.log('TBT colaboradores:', TBT);
      console.log('ANC colaboradores:', ANC);
      console.log('SJP colaboradores:', SJP);
      console.log('SCA colaboradores:', SCA);

      // Calculando a média
      const average = (TBT + ANC + SJP + SCA) / 4;
      console.log('Média de colaboradores:', average);

      // Acesse os campos numéricos dentro dos objetos AtestadoInfo para atestados
      const TBTAtestados = data?.TBT?.atestados || 0;
      const ANCAtestados = data?.ANC?.atestados || 0;
      const SJPAtestados = data?.SJP?.atestados || 0;
      const SCAAtestados = data?.SCA?.atestados || 0;

      console.log('TBT atestados:', TBTAtestados);
      console.log('ANC atestados:', ANCAtestados);
      console.log('SJP atestados:', SJPAtestados);
      console.log('SCA atestados:', SCAAtestados);

      // Calculando a média para atestados
      const averageAtestados = (TBTAtestados + ANCAtestados + SJPAtestados + SCAAtestados) / 4;
      console.log('Média de atestados:', averageAtestados);
    });
  }
}
```

<div align="center">
  
![Untitled](https://github.com/eularibr/Atividades_Programacao_Modulo9/blob/main/Ponderada_Semana6/assets/Ponderada8.png)

</div>

<div align="center">

![Untitled](https://github.com/eularibr/Atividades_Programacao_Modulo9/blob/main/Ponderada_Semana6/assets/Ponerada9.png)

</div>
