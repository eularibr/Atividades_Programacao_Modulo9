import { Component } from '@angular/core';
import { ChartsComponent } from '../../charts/charts.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartDetails } from '../../DTOs/chart.details';

@Component({
  selector: 'app-barchart',
  standalone: true,
  imports: [ChartsComponent, NgApexchartsModule],
  templateUrl: './barchart.component.html',
  styleUrl: './barchart.component.css'
})
export class BarchartComponent {
  chart: ChartDetails = {
    title: 'Número de colaboradores X Número de atestados X Planta',
    categories: ['São Bernardo', 'São Carlos' , 'Taubaté', 'São José dos Pinhares'],
    series: [
      {
        name: 'Quantidade de colaboradores',
        data: [1500, 1480, 950, 995],
      },
      {
        name: 'Quantidade de atestados',
        data: [720, 460, 348, 490], 
      },
    ],
  };
  
  series = [...this.chart.series];
  charts: any = {
    height: 350,
    type: 'bar',
  };
  title: any = {
    text: this.chart.title,
  };
  xaxis: any = {
    categories: this.chart.categories,
  };
}
