# Atividades_Programacao_Modulo9

# Ponderada de Programação - Tratamento de Dados (Semana 6)
<div align="center">
![Untitled](https://github.com/eularibr/Atividades_Programacao_Modulo9/blob/main/Ponderada_Semana6/assets/Ponderada1.png)

![Untitled](https://github.com/eularibr/Atividades_Programacao_Modulo9/blob/main/Ponderada_Semana6/assets/Ponderada2.png)

![Untitled](https://github.com/eularibr/Atividades_Programacao_Modulo9/blob/main/Ponderada_Semana6/assets/Ponderada3.png)

![Untitled](https://github.com/eularibr/Atividades_Programacao_Modulo9/blob/main/Ponderada_Semana6/assets/Ponderada4.png)

![Untitled](https://github.com/eularibr/Atividades_Programacao_Modulo9/blob/main/Ponderada_Semana6/assets/Ponderada5.png)

![Untitled](https://github.com/eularibr/Atividades_Programacao_Modulo9/blob/main/Ponderada_Semana6/assets/Ponderada6.png)

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

![Untitled](https://github.com/eularibr/Atividades_Programacao_Modulo9/blob/main/Ponderada_Semana6/assets/Ponerada9.png)
</div>
